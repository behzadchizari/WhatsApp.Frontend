import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ComponentStateService } from 'src/app/services/component-state.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  selectedTemplate!: TemplateRef<any>;

  @ViewChild('chatList', { static: true }) chatList!: TemplateRef<any>;
  @ViewChild('userProfile', { static: true }) userProfile!: TemplateRef<any>;

  constructor(private componentStateService: ComponentStateService) { }

  ngOnInit() {
    this.componentStateService.component$.subscribe(component => {
      this.selectedTemplate = component === 'chatList' ? this.chatList : this.userProfile;
    });
  }
}
