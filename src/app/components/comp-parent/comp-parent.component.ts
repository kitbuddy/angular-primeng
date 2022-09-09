import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompChildComponent} from "../comp-child/comp-child.component";
import {Constants} from "../../../Constants";

@Component({
  selector: 'app-comp-parent',
  templateUrl: './comp-parent.component.html',
  styleUrls: ['./comp-parent.component.scss']
})
export class CompParentComponent implements OnInit, AfterViewInit{

  @ViewChild(CompChildComponent) childCompo!: CompChildComponent;

  compoChildWhoMethod: any;
  no_value = Constants.no_value;

  constructor() { }

  ngOnInit(): void {

    console.log('parent on init')
  }

  ngAfterViewInit(): void {

    console.log('In Parent Compo');
    console.log(this.childCompo.whoAmI());
    this.compoChildWhoMethod = this.childCompo.whoAmI();
  }

}
