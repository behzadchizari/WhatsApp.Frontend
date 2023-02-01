import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap, take, takeUntil, Subject } from 'rxjs';
import { ScreenSize } from 'src/app/enums/screen-size';
import { ChatItem } from 'src/app/models/chat-item';
import { ChatService } from 'src/app/services/chat.service';
import { ScreenDetectionService } from 'src/app/services/screen-detection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  chatSelected: boolean = false;
  selectedChatItem?: ChatItem;
  isSmallScreeen: boolean = false;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private chatService: ChatService, private screenService: ScreenDetectionService) { }

  ngOnInit(): void {
    this.subscribeToSelectedChatItem();
    this.subscribeToScreenDetection();
  }

  private subscribeToSelectedChatItem() {
    this.chatService.selectedChatItem$.pipe(
      tap((data) => {
        this.chatSelected = data !== undefined;
        this.selectedChatItem = data;
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }

  private subscribeToScreenDetection() {
    this.screenService.screenSize.pipe(
      tap((screen) => {
        this.isSmallScreeen = screen === ScreenSize.ExtraSmall || screen === ScreenSize.Small;
      }),
      takeUntil(this._unsubscribe))
      .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
