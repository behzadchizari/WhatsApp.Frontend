import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { ChatItem } from 'src/app/models/chat-item';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {
  chatList$!: Observable<ChatItem[]>;
  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private chatService: ChatService) { }

  loadChatList() {
    this.chatList$ = this.chatService.getChatList$().pipe(
      take(1),
      takeUntil(this._unsubscribe)
    );
  }

  ngOnInit(): void {
    this.loadChatList();
  }

  onChatItemClick(chatItem: ChatItem) {
    this.chatService.selectChatItem(chatItem);
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
