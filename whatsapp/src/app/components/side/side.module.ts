import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideComponent } from './side.component';
import { ChatListSideModule } from './chat-list-side/chat-list-side.module';
import { SideHeaderComponent } from './side-header/side-header.component';
import { UserProfileSideComponent } from './user-profile-side/user-profile-side.component';
import { UikitModule } from 'src/app/uikit/uikit.module';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [
    SideComponent,
    SideHeaderComponent,
    UserProfileSideComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    ChatListSideModule,
    ChatModule
  ],
  exports: [SideComponent]
})
export class SideModule { }
