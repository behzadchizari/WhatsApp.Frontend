import { Component, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SideComponentStateService } from 'src/app/services/component-state.service';

@Component({
  selector: 'app-chat-list-side',
  templateUrl: './chat-list-side.component.html',
  styleUrls: ['./chat-list-side.component.scss']
})
export class ChatListSideComponent {

  constructor(private componentStateService: SideComponentStateService) { }

  showUserProfile() {
    this.componentStateService.openComponent('userProfile');
  }
}
