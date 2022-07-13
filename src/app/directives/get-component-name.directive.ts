import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appGetComponentName]'
})
export class GetComponentNameDirective {
  private elementSelected = false;
  constructor(private el: ElementRef) {
    console.log('this', this.constructor.name);

  }

  @HostListener('click')
  private onClick() {
    this.elementSelected = !this.elementSelected;

    if (this.elementSelected) {
      this.el.nativeElement.classList.add('capitalize');
    } else {
      this.el.nativeElement.classList.remove('capitalize');
    }
  }
}
