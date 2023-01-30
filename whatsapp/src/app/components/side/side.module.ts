import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideComponent } from './side.component';
import { ChatListSideModule } from './chat-list-side/chat-list-side.module';
import { SideHeaderComponent } from './side-header/side-header.component';
import { UserProfileSideComponent } from './user-profile-side/user-profile-side.component';
import { UikitModule } from 'src/app/uikit/uikit.module';

@NgModule({
  declarations: [
    SideComponent,
    SideHeaderComponent,
    UserProfileSideComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    ChatListSideModule,
  ],
  exports: [SideComponent]
})
export class SideModule { }
