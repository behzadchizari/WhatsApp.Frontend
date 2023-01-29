import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileSideModule } from './user-profile-side/user-profile-side.module';
import { SideComponent } from './side.component';
import { ChatListSideModule } from './chat-list-side/chat-list-side.module';

@NgModule({
  declarations: [SideComponent],
  imports: [
    CommonModule,
    ChatListSideModule,
    UserProfileSideModule
  ],
  exports: [SideComponent]
})
export class SideModule { }
