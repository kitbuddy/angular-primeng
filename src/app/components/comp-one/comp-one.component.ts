import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GetTestJsonService} from "../../service/get-test-json.service";

function simpleDecorator(target: any) {
  // window.alert('window is loading')
}

@simpleDecorator
@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit, OnChanges {
  myDataArray: any;

  sliderValue = 1;
  jsonData: any;
  displayedColumns = ['userId','userId*100', 'Id', 'testIDPercentage', 'title', 'body', 'time', 'Action'];
  getTime = this.getCurrentTime();
  openSidebar = false;
  userIdSelected = '1';

  constructor(private getTestJsonService: GetTestJsonService) {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }
  ngOnInit(): void {
    console.log('oninit')
    this.getJsonData();
  }

  private getJsonData() {
    this.getTestJsonService.getTestJson().subscribe(val => {
        this.jsonData = val;
    })
  }

  onRowClicked(row) {
    console.log(row)
  }

  getCurrentTime() {
     return Date.now();
  }

  ShowEvenUserIds() {
    let myVal = this.jsonData.filter(val => val.userId % 2== 0);
    this.jsonData = myVal
  }

  refresh_Table() {
    this.getJsonData();
  }
}
