import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListSideComponent } from './chat-list-side.component';
import { ChatListHeaderComponent } from './chat-list-header/chat-list-header.component';
import { ChatListSearchComponent } from './chat-list-search/chat-list-search.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { UikitModule } from 'src/app/uikit/uikit.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    ChatListSideComponent,
    ChatListHeaderComponent,
    ChatListSearchComponent,
    ChatListComponent,
    ChatItemComponent,
  ],
  imports: [
    CommonModule,
    UikitModule,
    PipesModule
  ],
  exports: [
    ChatListSideComponent,
    ChatListHeaderComponent,
    ChatListSearchComponent,
    ChatListComponent,
    ChatItemComponent,]
})
export class ChatListSideModule { }