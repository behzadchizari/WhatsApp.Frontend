import { Injectable } from '@angular/core';
import { Observable, of, Subject, delay } from 'rxjs';
import { ChatItem } from '../models/chat-item';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  public selectedChatItem: Subject<ChatItem> = new Subject<ChatItem>();

  private chatList: ChatItem[] = [
    {
      id: 1,
      name: 'Justin Leibow',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/id/22/400/400',
      lastActivity: new Date('2023/1/27'),
      muted: false,
      unreadMessagesCount: 999
    },
    {
      id: 2,
      name: 'Alexander Shustov',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/id/64/400/400',
      lastActivity: new Date('2023/1/24'),
      muted: true,
      unreadMessagesCount: 0
    },
    {
      id: 3,
      name: 'Rula Sibai',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/id/65/400/400',
      lastActivity: new Date(),
      muted: true,
      unreadMessagesCount: 24
    },
    {
      id: 4,
      name: 'Jennifer Trovato',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://picsum.photos/id/91/400/400',
      lastActivity: new Date('2022/12/4'),
      muted: true,
      unreadMessagesCount: 0
    },
    {
      id: 5,
      name: 'John Doe',
      displayMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: 'https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      lastActivity: new Date('2022/12/4'),
      muted: false,
      unreadMessagesCount: 0
    }
  ]

  public getChatList(): Observable<ChatItem[]> {
    return of(this.chatList).pipe(delay(1000));
  }

  public selectChatItem(chatItem: ChatItem): void {
    this.selectedChatItem.next(chatItem);
  }
}
