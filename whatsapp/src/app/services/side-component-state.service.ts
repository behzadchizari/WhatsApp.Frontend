import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideInnerComponent } from '../enums/side-inner-component';
import { SideComponentState } from '../models/side-component-state';

@Injectable({
  providedIn: 'root'
})
export class SideComponentStateService {
  private componentSubject = new BehaviorSubject<SideComponentState>({ component: SideInnerComponent.Default });

  component$ = this.componentSubject.asObservable();

  openComponent(component: SideInnerComponent, data?: any) {
    this.componentSubject.next({ component: component, data: data });
  }

  clear() {
    this.componentSubject.next({ component: SideInnerComponent.Default });
  }
}
