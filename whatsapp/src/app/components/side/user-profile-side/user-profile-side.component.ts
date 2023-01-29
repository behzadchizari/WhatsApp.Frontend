import { Component } from '@angular/core';
import { SideComponentStateService } from 'src/app/services/side-component-state.service';

@Component({
  selector: 'app-user-profile-side',
  templateUrl: './user-profile-side.component.html',
  styleUrls: ['./user-profile-side.component.scss']
})
export class UserProfileSideComponent {

  constructor(private componentStateService: SideComponentStateService) { }

  goBack() {
    this.componentStateService.clear();
  }
}
