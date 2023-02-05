import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChatItem } from 'src/app/models/chat-item';
import { MatMenuTrigger } from '@angular/material/menu';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent {
  @Input() isActive!: boolean;
  @Input() chatItem!: ChatItem;
  @Output() itemClick = new EventEmitter<ChatItem>();
  @ViewChild('menuTrigger') trigger!: MatMenuTrigger;


  constructor(private chatService: ChatService) { }

  onChatItemClick() {
    this.itemClick.emit(this.chatItem);
  }

  onPinChatItemClick(chatItem: ChatItem) {
    this.chatService.pinChatItem(chatItem);
  }

  onUnpinChatItemClick(chatItem: ChatItem) {
    this.chatService.unPinChatItem(chatItem);
  }

  openChatActionMenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.trigger.openMenu();
  }
}
