import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListSideModule } from '../chat-list-side/chat-list-side.module';
import { UserProfileSideModule } from '../user-profile-side/user-profile-side.module';
import { SideComponent } from './side.component';



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
