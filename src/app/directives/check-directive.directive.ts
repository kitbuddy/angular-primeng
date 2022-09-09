import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[ttClass]'
})
export class CheckDirectiveDirective implements OnInit, OnChanges{

  @Input() ttClass: string;
  constructor(private el: ElementRef) {
    console.log('constructor')
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'red';
    // window.alert('Called from directive')
    }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchnage')
    this.el.nativeElement.style.backgroundColor = this.ttClass;
  }


}
