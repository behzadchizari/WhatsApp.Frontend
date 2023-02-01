import { Component, Input } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  @Input() name!: string;
  @Input() hasHeader: boolean = true;

  constructor(private componentStateService: SideComponentStateService) { }

  goBack() {
    this.componentStateService.clear();
  }
}
