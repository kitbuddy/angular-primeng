import { Component, OnInit } from '@angular/core';
import {BehaviourSubjectSerService} from "../../service/behaviour-subject-ser.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public behvaiourSer: BehaviourSubjectSerService) { }

  dockItems: MenuItem[];


  ngOnInit(): void {
    this.behvaiourSer.setRefreshedStatus(false);
  }

}
