import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-list-header',
  templateUrl: './chat-list-header.component.html',
  styleUrls: ['./chat-list-header.component.scss']
})
export class ChatListHeaderComponent {
  @Output() avatarClick = new EventEmitter();

  onAvatarClickClick() {
    this.avatarClick.emit();
  }
}
