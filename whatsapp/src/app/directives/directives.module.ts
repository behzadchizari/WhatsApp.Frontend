import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToBottomDirective } from '../directives/scroll-to-bottom.directive';
import { ActiveDirective } from './active.directive';
import { TouchHoldDirective } from './touch-hold.directive';



@NgModule({
  declarations: [ScrollToBottomDirective, ActiveDirective, TouchHoldDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollToBottomDirective,
    ActiveDirective,
    TouchHoldDirective
  ]
})
export class DirectivesModule { }
