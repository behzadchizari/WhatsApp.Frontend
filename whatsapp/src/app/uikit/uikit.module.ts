import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ],
  exports: [
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ]
})
export class UikitModule { }
