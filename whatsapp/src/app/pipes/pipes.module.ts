import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './date.pipe';
import { LimitNumberPipe } from './limit-number.pipe';



@NgModule({
  declarations: [
    DatePipe,
    LimitNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatePipe,
    LimitNumberPipe
  ]
})
export class PipesModule { }
