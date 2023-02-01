import { Injectable, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { ScreenSize } from '../enums/screen-size';

const screenSizeQueries = {
  [ScreenSize.Large]: '(min-width: 1200px)',
  [ScreenSize.Medium]: '(min-width: 992px) and (max-width: 1199px)',
  [ScreenSize.Small]: '(min-width: 768px) and (max-width: 991px)',
  [ScreenSize.ExtraSmall]: '(max-width: 767px)'
};

@Injectable({
  providedIn: 'root'
})
export class ScreenDetectionService implements OnDestroy {
  private queries = new Map<ScreenSize, MediaQueryList>();
  private listeners = new Map<ScreenSize, (e: MediaQueryListEvent) => void>();
  screenSizeChanged = new Subject<ScreenSize>();

  constructor(private mediaMatcher: MediaMatcher) {
    this.initData();
  }

  private initData() {
    Object.values(ScreenSize).forEach(size => {
      this.queries.set(size, this.mediaMatcher.matchMedia(screenSizeQueries[size]));
      this.listeners.set(size, (e: MediaQueryListEvent) => this.updateScreenSize(e));
      this.queries.get(size)!.addEventListener('change', this.listeners.get(size)!);
    });
  }

  private updateScreenSize(e: MediaQueryListEvent) {
    Object.values(ScreenSize).some(size => {
      if (e.media === screenSizeQueries[size]) {
        this.screenSizeChanged.next(size);
        return true;
      }
      return false;
    });
  }

  ngOnDestroy() {
    Object.values(ScreenSize).forEach(size => {
      this.queries.get(size)!.removeEventListener('change', this.listeners.get(size)!);
    });
  }
}
