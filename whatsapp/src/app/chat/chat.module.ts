import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { DefaultDisplayComponent } from './default-display/default-display.component';
import { UikitModule } from '../uikit/uikit.module';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatMesageViewComponent } from './chat-mesage-view/chat-mesage-view.component';
import { ChatControlBarComponent } from './chat-control-bar/chat-control-bar.component';



@NgModule({
  declarations: [

    ChatComponent,
    DefaultDisplayComponent,
    ChatHeaderComponent,
    ChatMesageViewComponent,
    ChatControlBarComponent,
  ],
  imports: [
    CommonModule,
    UikitModule
  ],
  exports: [
    DefaultDisplayComponent,
    ChatComponent
  ]
})
export class ChatModule { }
