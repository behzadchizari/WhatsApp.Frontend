import { Injectable } from '@angular/core';
import { Observable, of, Subject, delay } from 'rxjs';
import { ChatItem } from '../models/chat-item';
import { DateHelper } from '../utility/date-helper';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  public selectedChatItem$: Subject<ChatItem | undefined> = new Subject<ChatItem | undefined>();

  private chatList: ChatItem[] = [
    {
      id: 1,
      name: 'Justin Leibow',
      displayMessage: "The hand sanitizer was actually clear glue.The hand sanitizer was actually clear glue.",
      image: 'https://picsum.photos/id/22/400/400',
      lastActivity: DateHelper.addHours(new Date(), -0.25),
      muted: true,
      unreadMessagesCount: 1,
      isPinned: true
    },
    {
      id: 2,
      name: 'Alexander Shustov',
      displayMessage: "In hopes of finding out the truth, he entered the one-room library.",
      image: 'https://picsum.photos/id/64/400/400',
      lastActivity: DateHelper.addDays(new Date(), -1),
      muted: true,
      unreadMessagesCount: 0
    },
    {
      id: 3,
      name: 'Rula Sibai',
      displayMessage: "I'll have you know I've written over fifty novels",
      image: 'https://picsum.photos/id/65/400/400',
      lastActivity: DateHelper.addHours(new Date(), -25),
      muted: true,
      unreadMessagesCount: 0
    },
    {
      id: 4,
      name: 'Jennifer Trovato',
      displayMessage: "Now I need to ponder my existence and ask myself if I'm truly real",
      image: 'https://picsum.photos/id/91/400/400',
      lastActivity: DateHelper.addDays(new Date(), -2),
      muted: true,
      unreadMessagesCount: 0
    },
    {
      id: 5,
      name: 'John Doe',
      displayMessage: "She always speaks to him in a loud voice.",
      image: 'https://picsum.photos/id/92/400/400',
      lastActivity: DateHelper.addDays(new Date(), -3),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 6,
      name: 'Karen Atkinson',
      displayMessage: "She always speaks to him in a loud voice.",
      image: 'https://picsum.photos/id/93/400/400',
      lastActivity: DateHelper.addHours(new Date(), -2),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 7,
      name: 'Roger	Umbridge',
      displayMessage: "He quietly entered the museum as the super bowl started.",
      image: 'https://picsum.photos/id/94/400/400',
      lastActivity: DateHelper.addHours(new Date(), -0.5),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 8,
      name: 'Bethany	Brooks',
      displayMessage: "The elderly neighborhood became enraged over the coyotes who had been blamed for the poodle’s disappearance.",
      image: 'https://picsum.photos/id/95/400/400',
      lastActivity: DateHelper.addHours(new Date(), -0.75),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 9,
      name: '	Jamie	Talbot',
      displayMessage: "Joe discovered that traffic cones make excellent megaphones.",
      image: 'https://picsum.photos/id/96/400/400',
      lastActivity: DateHelper.addDays(new Date(), -5),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 10,
      name: 'Kimberley	Edwards',
      displayMessage: "If any cop asks you where you were, just say you were visiting Kansas.",
      image: 'https://picsum.photos/id/125/400/400',
      lastActivity: DateHelper.addDays(new Date(), -10),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 11,
      name: 'Ryan	Newsome',
      displayMessage: "Tomorrow will bring something new, so leave today as a memory.",
      image: 'https://picsum.photos/id/122/400/400',
      lastActivity: DateHelper.addDays(new Date(), -50),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 12,
      name: 'Owen	Kirkham',
      displayMessage: "He was an introvert that extroverts seemed to love.",
      image: 'https://picsum.photos/id/101/400/400',
      lastActivity: DateHelper.addDays(new Date(), -105),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 13,
      name: 'Miranda	Harradine',
      displayMessage: "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.",
      image: 'https://picsum.photos/id/102/400/400',
      lastActivity: DateHelper.addDays(new Date(), -500),
      muted: false,
      unreadMessagesCount: 0,
    },
    {
      id: 14,
      name: 'Alvin	Paxman',
      displayMessage: "She advised him to come back at once.",
      image: 'https://picsum.photos/id/103/400/400',
      lastActivity: new Date('2022/12/4'),
      muted: false,
      unreadMessagesCount: 0
    },
    {
      id: 15,
      name: 'Angela	Rimshaw	',
      displayMessage: "Warm beer on a cold day isn't my idea of fun.Warm beer on a cold day isn't my idea of fun.Warm beer on a cold day isn't my idea of fun.Warm beer on a cold day isn't my idea of fun.",
      image: 'https://picsum.photos/id/191/400/400',
      lastActivity: new Date('2022/12/4'),
      muted: true,
      unreadMessagesCount: 0,
    }
  ]

  public getChatList$(): Observable<ChatItem[]> {
    return of(this.chatList);
  }

  public selectChatItem(chatItem: ChatItem): void {
    chatItem.unreadMessagesCount = 0;
    this.selectedChatItem$.next(chatItem);
  }

  public pinChatItem(chatItem: ChatItem) {
    const chatItemIndex = this.chatList.findIndex(x => x.id == chatItem.id);
    this.chatList[chatItemIndex].isPinned = true;
  }

  public unPinChatItem(chatItem: ChatItem) {
    const chatItemIndex = this.chatList.findIndex(x => x.id == chatItem.id);
    this.chatList[chatItemIndex].isPinned = false;
  }

  public pushChatToTest() {
    this.chatList.push({
      id: Math.random() * 500,
      name: 'Yestolina Testarovsky',
      displayMessage: "Warm beer on a cold day isn't my idea of fun.Warm beer on a cold day isn't my idea of fun.Warm beer on a cold day isn't my idea of fun.Warm beer on a cold day isn't my idea of fun.",
      image: 'https://picsum.photos/400/400',
      lastActivity: new Date(),
      muted: false,
      unreadMessagesCount: 1,
      isPinned: false
    });
  }

  public clearSelectedChatItem(): void {
    this.selectedChatItem$.next(undefined);
  }

  public getSelectedChatItem$(): Observable<ChatItem | undefined> {
    return this.selectedChatItem$.asObservable();
  }
}
