import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToBottomDirective } from '../directives/scroll-to-bottom.directive';
import { ActiveDirective } from './active.directive';



@NgModule({
  declarations: [ScrollToBottomDirective, ActiveDirective],
  imports: [
    CommonModule
  ],
  exports: [ScrollToBottomDirective, ActiveDirective]
})
export class DirectivesModule { }
