import { Component, ViewChild, TemplateRef } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { ChatService } from 'src/app/services/chat.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { ChatItem } from 'src/app/models/chat-item';
import { ScreenDetectionService } from 'src/app/services/screen-detection.service';
import { ScreenSize } from 'src/app/enums/screen-size';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(`400ms ease-out`, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate(`400ms ease-out`, style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('FadeOutDelay', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate(`100ms 400ms ease-out`, style({ opacity: 0 }))
      ])
    ])
  ]

})
export class SideComponent {
  @ViewChild('userProfile', { static: true }) userProfile!: TemplateRef<any>;
  @ViewChild('chatList', { static: true }) chatList!: TemplateRef<any>;
  @ViewChild('messageView', { static: true }) messageView!: TemplateRef<any>;

  isSmallScreeen: boolean = false;
  templates = new Map<string, TemplateRef<any>>();
  selectedTemplate: TemplateRef<any> = this.chatList;

  constructor(
    private componentStateService: SideComponentStateService,
    private chatService: ChatService,
    private screenService: ScreenDetectionService) { }

  ngOnInit() {
    this.fillTheTemplateMap();
    this.subscribeToSelectedComponent();
    this.subscribeToSelectedChatItem();
    this.subscribeToScreenDetection();
  }

  private subscribeToSelectedComponent(): void {
    this.componentStateService.component$.subscribe(component => {
      this.selectedTemplate = this.templates.get(component)!;
    });
  }

  private fillTheTemplateMap(): void {
    this.templates.set('messageView', this.messageView);
    this.templates.set('userProfile', this.userProfile);
    this.templates.set('chatList', this.chatList);
  }


  selectedChatItem!: ChatItem;
  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  private subscribeToSelectedChatItem() {
    this.chatService.selectedChatItem$.pipe(
      tap((data) => {
        if (data) {
          this.selectedChatItem = data;
          this.componentStateService.openComponent('messageView');
        };
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }

  private subscribeToScreenDetection() {
    this.screenService.screenSize.pipe(
      tap((screen) => {
        this.isSmallScreeen = screen === ScreenSize.ExtraSmall || screen === ScreenSize.Small;
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }
}