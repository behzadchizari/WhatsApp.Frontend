import { Component, ViewChild, TemplateRef } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/component-state.service';
import { trigger, transition, useAnimation, style, animate } from '@angular/animations';
import { slideInLeft, slideOutLeft } from 'ng-animate';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(`500ms ease-out`, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate(`500ms ease-out`, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]

})
export class SideComponent {
  @ViewChild('userProfile', { static: true }) userProfile!: TemplateRef<any>;

  selectedTemplate?: TemplateRef<any>;

  constructor(private componentStateService: SideComponentStateService) { }

  ngOnInit() {
    this.componentStateService.component$.subscribe(component => {
      this.selectedTemplate = component === 'userProfile' ? this.userProfile : undefined;
    });
  }
}
