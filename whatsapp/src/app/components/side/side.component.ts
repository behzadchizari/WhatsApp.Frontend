import { Component, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subject, tap, takeUntil } from 'rxjs';
import { SideInnerComponent } from 'src/app/enums/side-inner-component';

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
export class SideComponent implements OnDestroy {
  @ViewChild('messageView', { static: true }) messageView!: TemplateRef<any>;
  @ViewChild('userProfile', { static: true }) userProfile!: TemplateRef<any>;

  isSmallScreeen: boolean = false;
  templates = new Map<SideInnerComponent, TemplateRef<any>>();
  selectedTemplate!: TemplateRef<any>;
  data: any;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private componentStateService: SideComponentStateService) { }

  ngOnInit() {
    this.fillTheTemplateMap();
    this.subscribeToSelectedComponent();
  }

  private subscribeToSelectedComponent(): void {
    this.componentStateService.component$.pipe(
      tap((state) => {
        this.selectedTemplate = this.templates.get(state.component)!;
        this.data = state.data;
      }),
      takeUntil(this._unsubscribe)
    ).subscribe();
  }

  private fillTheTemplateMap(): void {
    this.templates.set(SideInnerComponent.MessageView, this.messageView);
    this.templates.set(SideInnerComponent.UserProfile, this.userProfile);
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}