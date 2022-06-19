import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

function DecoratorForComponentTwo(target: any) {
  // window.alert('This component shows Angular Life Cycle');
}

@DecoratorForComponentTwo
@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  title: string = "Custom Directives in Angular";
  show=true;
  display = false;

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log('-----changes start-------')
    console.log(changes)
    console.log('-----changes End-------')

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  showDialog() {
    this.display = true;
  }
}
