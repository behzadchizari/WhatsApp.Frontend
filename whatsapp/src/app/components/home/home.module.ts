import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UikitModule } from 'src/app/uikit/uikit.module';
import { ChatModule } from '../chat/chat.module';
import { ChatListSideModule } from '../chat-list-side/chat-list-side.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    ChatModule,
    ChatListSideModule
  ]
})
export class HomeModule { }
