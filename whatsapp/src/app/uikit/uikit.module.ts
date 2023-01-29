import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule
  ]
})
export class UikitModule { }
