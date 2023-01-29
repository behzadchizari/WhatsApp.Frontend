import { Component, Input } from '@angular/core';
import { ChatItem } from 'src/app/models/chat-item';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() chatItem!: ChatItem;

}
