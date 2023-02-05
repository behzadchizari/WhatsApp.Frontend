import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTouchHold]'
})
export class TouchHoldDirective {
  @Output('appTouchHold') touchhold = new EventEmitter<TouchEvent>();

  private touchStartTimeout: any;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartTimeout = setTimeout(() => {
      this.vibrateMobie();
      this.touchhold.emit(event);
    }, 800);
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    clearTimeout(this.touchStartTimeout);
  }

  private vibrateMobie() {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  }
}
