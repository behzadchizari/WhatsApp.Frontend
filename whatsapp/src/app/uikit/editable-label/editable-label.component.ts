import { Component, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss']
})
export class EditableLabelComponent implements AfterViewChecked {
  @Input() title!: string;
  @Input() value!: string;

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  editMode: boolean = false;

  ngAfterViewChecked() {
    if (this.editMode) {
      this.inputRef.nativeElement.focus();
    }
  }

  toggleEditClick() {
    this.editMode = !this.editMode;
  }
}
