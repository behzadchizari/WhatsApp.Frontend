import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './date.pipe';
import { LimitNumberPipe } from './limit-number.pipe';
import { SortChatItemsPipe } from './sort-chat-items.pipe';



@NgModule({
  declarations: [
    DatePipe,
    LimitNumberPipe,
    SortChatItemsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatePipe,
    LimitNumberPipe,
    SortChatItemsPipe
  ]
})
export class PipesModule { }
