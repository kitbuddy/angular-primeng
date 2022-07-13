import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.scss']
})
export class CompChildComponent implements OnInit {
  counter: number = 1;
  constructor() { }

  ngOnInit(): void {
    console.log('child Ngoninit')
  }

  whoAmI() {
    return 'I am a child component!' + this.counter;
  }

  increaseCounter() {
    this.counter++;
  }
}
