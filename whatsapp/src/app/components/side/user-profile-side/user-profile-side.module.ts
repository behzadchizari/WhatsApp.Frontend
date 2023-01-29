import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileSideComponent } from './user-profile-side.component';



@NgModule({
  declarations: [UserProfileSideComponent],
  imports: [
    CommonModule
  ],
  exports: [UserProfileSideComponent],

})
export class UserProfileSideModule { }
