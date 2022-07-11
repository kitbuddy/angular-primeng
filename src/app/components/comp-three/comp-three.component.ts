import { Component, OnInit } from '@angular/core';
import {BehaviourSubjectSerService} from "../../service/behaviour-subject-ser.service";

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.scss']
})
export class CompThreeComponent implements OnInit {
  isAvailable = true;
  _refreshStatus:any;

  constructor(public behaviouService: BehaviourSubjectSerService) { }

  ngOnInit(): void {
    this.behaviouService.getRefreshedStatus().subscribe(value => {
      console.log(this._refreshStatus)
      this._refreshStatus = value;
    })
  }

  toggleRefreshStatus() {
    this._refreshStatus = !this._refreshStatus;
    this.behaviouService.setRefreshedStatus(this._refreshStatus);
  }
}
