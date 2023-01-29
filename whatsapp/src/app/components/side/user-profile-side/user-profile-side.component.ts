import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-profile-side',
  templateUrl: './user-profile-side.component.html',
  styleUrls: ['./user-profile-side.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
    ])
  ]
})
export class UserProfileSideComponent {
  @HostBinding('@slideIn') slideIn = 'in';

}
