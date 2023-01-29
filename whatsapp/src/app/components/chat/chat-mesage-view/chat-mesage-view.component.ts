import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-mesage-view',
  templateUrl: './chat-mesage-view.component.html',
  styleUrls: ['./chat-mesage-view.component.scss']
})
export class ChatMesageViewComponent {

  messages: { text: string, out: boolean }[] = [];

  pushMessage() {
    this.messages.push({ text: 'ChatMesageViewComponent wroks!', out: Math.trunc(Math.random() * 2) === 1 });
  }

}
