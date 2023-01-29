import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideComponentStateService {
  private componentSubject = new BehaviorSubject<string | undefined>('chatList');

  component$ = this.componentSubject.asObservable();

  openComponent(component: string) {
    this.componentSubject.next(component);
  }

  clear() {
    this.componentSubject.next(undefined);
  }
}
