import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentStateService {
  private componentSubject = new BehaviorSubject<string>('chatList');

  component$ = this.componentSubject.asObservable();

  changeComponent(component: string) {
    this.componentSubject.next(component);
  }
}
