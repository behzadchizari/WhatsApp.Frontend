import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
})
export class SideHeaderComponent {
  @Input() name!: string;
  @Output() back = new EventEmitter();

  onBackClick() {
    this.back.emit();
  }
}
