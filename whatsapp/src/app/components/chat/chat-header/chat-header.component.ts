import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatItem } from 'src/app/models/chat-item';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent {
  @Input() chatItem!: ChatItem;
  @Output() close = new EventEmitter();

  goBack() {
    this.close.emit();
  }
}
