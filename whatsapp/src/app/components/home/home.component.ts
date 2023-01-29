import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ChatItem } from 'src/app/models/chat-item';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chatSelected: boolean = false;
  selectedChatItem!: ChatItem;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.subscribeToSelectedChatItem();
  }

  subscribeToSelectedChatItem() {
    this.chatService.selectedChatItem.pipe(
      tap((data) => {
        if (data) {
          this.chatSelected = true;
          this.selectedChatItem = data;
        };
      }))
      .subscribe();
  }

}
