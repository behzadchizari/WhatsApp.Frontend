import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { DefaultDisplayComponent } from './default-display/default-display.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatMesageViewComponent } from './chat-mesage-view/chat-mesage-view.component';
import { ChatControlBarComponent } from './chat-control-bar/chat-control-bar.component';
import { UikitModule } from 'src/app/uikit/uikit.module';
import { DirectivesModule } from 'src/app/directives/directives.module';



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
    UikitModule,
    DirectivesModule
  ],
  exports: [
    DefaultDisplayComponent,
    ChatComponent
  ]
})
export class ChatModule { }
