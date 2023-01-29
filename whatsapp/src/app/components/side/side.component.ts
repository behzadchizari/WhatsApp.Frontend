import { Component, ViewChild, TemplateRef } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';
import { trigger, transition, style, animate } from '@angular/animations';

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

  templates = new Map<string, TemplateRef<any>>();

  selectedTemplate: TemplateRef<any> = this.chatList;

  constructor(private componentStateService: SideComponentStateService) { }

  ngOnInit() {
    this.fillTheTemplateMap();
    this.subscribeToSelectedComponent();
  }

  private subscribeToSelectedComponent(): void {
    this.componentStateService.component$.subscribe(component => {
      this.selectedTemplate = this.templates.get(component)!;
    });
  }

  private fillTheTemplateMap(): void {
    this.templates.set('userProfile', this.userProfile);
    this.templates.set('chatList', this.chatList);
  }
}