import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap, take, takeUntil, Subject } from 'rxjs';
import { ChatItem } from 'src/app/models/chat-item';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  chatSelected: boolean = false;
  selectedChatItem?: ChatItem;
  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.subscribeToSelectedChatItem();
  }

  subscribeToSelectedChatItem() {
    this.chatService.selectedChatItem$.pipe(
      tap((data) => {
        this.chatSelected = data !== undefined;
        this.selectedChatItem = data;
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
