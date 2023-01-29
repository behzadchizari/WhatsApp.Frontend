import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

const chatItemSelector = 'app-chat-item';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @HostBinding('class.active') isHighlighted = false;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: HTMLElement): void {
    const hostElement = this.el.nativeElement;
    if (!hostElement.contains(target)
      && target.closest(chatItemSelector)
      && hostElement.classList.contains('active')) {
      this.isHighlighted = false;
    }
  }
}