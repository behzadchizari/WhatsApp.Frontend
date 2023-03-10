import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UikitModule } from 'src/app/uikit/uikit.module';
import { ChatModule } from '../chat/chat.module';
import { SideModule } from '../side/side.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UikitModule,
    ChatModule,
    SideModule
  ]
})
export class HomeModule { }
