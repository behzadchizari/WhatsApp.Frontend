import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ScreenSize } from '../enums/screen-size';

const screenSizeQueries = {
  [ScreenSize.Large]: '(min-width: 1200px)',
  [ScreenSize.Medium]: '(min-width: 992px) and (max-width: 1200px)',
  [ScreenSize.Small]: '(min-width: 768px) and (max-width: 992px)',
  [ScreenSize.ExtraSmall]: '(max-width: 768px)'
};

@Injectable({
  providedIn: 'root'
})
export class ScreenDetectionService implements OnDestroy {
  private screenSizeChanged: Subject<ScreenSize> = new Subject<ScreenSize>();

  get screenSize() {
    return this.screenSizeChanged.asObservable();
  }

  constructor() {
    this.AddEventListeners();
    this.initScreenSize();
  }

  private AddEventListeners() {
    Object.values(ScreenSize).some(size => {
      window.matchMedia(screenSizeQueries[size]).addEventListener('change', (e: MediaQueryListEvent) => this.updateScreenSize());
    });
  }

  private initScreenSize() {
    setTimeout(() => {
      this.updateScreenSize();
    }, 0);
  }

  private updateScreenSize() {
    Object.values(ScreenSize).some(size => {
      if (window.matchMedia(screenSizeQueries[size]).matches) {
        this.screenSizeChanged.next(size);
      }
    });
  }

  private RemoveEventListeners() {
    Object.values(ScreenSize).some(size => {
      window.matchMedia(screenSizeQueries[size]).removeEventListener('change', (e: MediaQueryListEvent) => this.updateScreenSize());
    });
  }

  ngOnDestroy(): void {
    this.RemoveEventListeners();
  }
}
