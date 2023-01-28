import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message-read-status',
  templateUrl: './chat-message-read-status.component.html',
  styleUrls: ['./chat-message-read-status.component.scss']
})
export class ChatMessageReadStatusComponent {
  @Input() status?: string;
}
