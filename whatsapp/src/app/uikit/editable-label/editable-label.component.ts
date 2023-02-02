import { Component, Input, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss']
})
export class EditableLabelComponent implements AfterViewChecked, AfterViewInit {
  @Input() title!: string;
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  editMode: boolean = false;
  newValue!: string;

  ngAfterViewChecked() {
    if (this.editMode) {
      this.inputRef.nativeElement.focus();
    }
  }

  ngAfterViewInit(): void {
    this.newValue = this.value
  }

  submit() {
    this.toggleEditClick();
    if (this.newValue !== this.value) {
      this.valueChange.emit(this.newValue);
    }
  }

  toggleEditClick() {
    this.editMode = !this.editMode;
  }
}
