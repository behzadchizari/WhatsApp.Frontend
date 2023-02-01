import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideComponentStateService {
  private componentSubject = new BehaviorSubject<string>('chatList');

  component$ = this.componentSubject.asObservable();

  openComponent(component: string) {
    this.componentSubject.next(component);
  }

  clear() {
    this.componentSubject.next('chatList');
  }
}
