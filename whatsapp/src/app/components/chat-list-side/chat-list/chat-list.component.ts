import { Component } from '@angular/core';
import { ChatItem } from 'src/app/models/chat-item';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  chatList: ChatItem[] = [
    {
      name: 'Behzad Chizari',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/200',
      lastActivity: new Date('2023/1/27'),
      muted: false,
      unreadMessagesCount: 999
    },
    {
      name: 'Behzad Chizari',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/200',
      lastActivity: new Date('2023/1/24'),
      muted: true,
      unreadMessagesCount: 0
    },
    {
      name: 'Behzad Chizari',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/200',
      lastActivity: new Date(),
      muted: true,
      unreadMessagesCount: 24
    },
    {
      name: 'Behzad Chizari',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/200',
      lastActivity: new Date('2022/12/4'),
      muted: true,
      unreadMessagesCount: 0
    }
  ]




  onChatItemClick(event: ChatItem) {

  }
}
