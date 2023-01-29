import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

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
    if (!this.el.nativeElement.contains(target)
      && this.el.nativeElement.classList.contains('active')) {
      this.isHighlighted = false;
    }
  }
}