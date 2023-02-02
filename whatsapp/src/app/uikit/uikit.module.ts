import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditableLabelComponent } from './editable-label/editable-label.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditableLabelComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
    FormsModule
  ],
  exports: [
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
    EditableLabelComponent
  ]
})
export class UikitModule { }