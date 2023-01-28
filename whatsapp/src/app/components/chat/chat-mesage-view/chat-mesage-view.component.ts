import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-mesage-view',
  templateUrl: './chat-mesage-view.component.html',
  styleUrls: ['./chat-mesage-view.component.scss']
})
export class ChatMesageViewComponent {

  messages = [
    { text: 'Hello', out: true },
    { text: 'Hey there', out: false },
    { text: 'You good?', out: true },
    { text: 'Yup', out: false },
    // { text: 'U?', out: false },
    // { text: 'Fine', out: true },
    // { text: 'You have time?', out: true },
    // { text: 'sup?', out: false },
    // { text: 'Let\'s go out To day. I don\'t know if you are busy or not. But it\'s been too boring do far.I need something new and different. Are you upo to eat out tonight or what?', out: true },
    // { text: '?', out: true },
    // { text: 'I\'m in 😅', out: false },
    // { text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used todemonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsummay be used as a placeholder before final copy is available.', out: true },
    // { text: 'So see you next year', out: true },
    // { text: 'why nex year', out: false },
    // { text: 'just 4 fun', out: true },
    // { text: 'LoL!', out: true },
  ]

  pushMessage() {
    this.messages.push({ text: 'ChatMesageViewComponent wroks!', out: true });
  }

}
