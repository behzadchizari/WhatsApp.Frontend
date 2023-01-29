import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChatItem } from 'src/app/models/chat-item';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent {
  @Input() chatItem!: ChatItem;
  @Output() itemClick = new EventEmitter<ChatItem>();

  onChatItemClick() {
    console.log('item clicked');
    this.itemClick.emit(this.chatItem);
  }

  onChatActionClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
