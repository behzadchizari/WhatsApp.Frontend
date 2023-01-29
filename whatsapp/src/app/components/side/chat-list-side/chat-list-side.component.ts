import { Component } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';

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
