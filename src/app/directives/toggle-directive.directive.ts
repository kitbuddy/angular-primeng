import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appToggleDirective]'
})
export class ToggleDirectiveDirective implements OnInit{

  private elementSelected = false;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  private onClick() {
  this.elementSelected = !this.elementSelected;

  if(this.elementSelected) {
    this.el.nativeElement.classList.add('toggle');
  } else {
    this.el.nativeElement.classList.remove('toggle');
  }
  }

  ngOnInit(): void {
  }
}
