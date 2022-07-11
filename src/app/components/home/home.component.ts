import { Component, OnInit } from '@angular/core';
import {BehaviourSubjectSerService} from "../../service/behaviour-subject-ser.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public behvaiourSer: BehaviourSubjectSerService) { }

  ngOnInit(): void {
    this.behvaiourSer.setRefreshedStatus(false);
  }

}
