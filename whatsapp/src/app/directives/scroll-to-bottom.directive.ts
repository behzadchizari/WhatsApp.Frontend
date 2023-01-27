import { AfterViewChecked, Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollToBottom]'
})
export class ScrollToBottomDirective implements AfterViewChecked {
  @HostBinding('style.overflow') bgColor: string = 'auto';

  constructor(private el: ElementRef) { }

  ngAfterViewChecked(): void {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }
}
