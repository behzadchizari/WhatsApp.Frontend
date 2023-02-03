import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { ScreenSize } from 'src/app/enums/screen-size';
import { SideInnerComponent } from 'src/app/enums/side-inner-component';
import { ChatItem } from 'src/app/models/chat-item';
import { ChatService } from 'src/app/services/chat.service';
import { ScreenDetectionService } from 'src/app/services/screen-detection.service';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {
  chatList$!: Observable<ChatItem[]>;
  activeChatItem: ChatItem | undefined;
  private _unsubscribe: Subject<boolean> = new Subject<boolean>();
  isSmallScreeen: boolean = false;

  constructor(private chatService: ChatService, private screenService: ScreenDetectionService, private componentStateService: SideComponentStateService) { }


  ngOnInit(): void {
    this.loadChatList();
    this.subscribeToSelectedChatItem();
    this.subscribeToScreenDetection();
  }

  loadChatList() {
    this.chatList$ = this.chatService.getChatList$().pipe(
      take(1),
      takeUntil(this._unsubscribe)
    );
  }

  onChatItemClick(chatItem: ChatItem) {
    this.activeChatItem = chatItem;
    this.chatService.selectChatItem(chatItem);
    this.openMessageViewInSamllScreen();
  }

  addChat() {
    this.chatService.pushChatToTest();
  }
  private subscribeToSelectedChatItem() {
    this.chatService.selectedChatItem$.pipe(
      tap((data) => {
        if (!data) {
          this.activeChatItem = undefined;
        };
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }

  private subscribeToScreenDetection() {
    this.screenService.screenSize.pipe(
      tap((screen) => {
        this.isSmallScreeen = screen === ScreenSize.ExtraSmall || screen === ScreenSize.Small;
        this.openMessageViewInSamllScreen();
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }

  private openMessageViewInSamllScreen() {
    if (this.isSmallScreeen && this.activeChatItem) {
      this.componentStateService.openComponent(SideInnerComponent.MessageView, this.activeChatItem);
    } else if (this.activeChatItem) {
      this.componentStateService.clear();
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
