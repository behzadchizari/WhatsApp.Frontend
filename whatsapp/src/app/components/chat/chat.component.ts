import { Component, Input } from '@angular/core';
import { ChatItem } from 'src/app/models/chat-item';
import { ChatService } from 'src/app/services/chat.service';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() chatItem!: ChatItem;
  constructor(private chatService: ChatService, private sideComponentStateService: SideComponentStateService) { }


  closeChatViewMessage() {
    this.chatService.clearSelectedChatItem();
    this.sideComponentStateService.clear();
  }
}
