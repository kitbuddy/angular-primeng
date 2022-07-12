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
  dockBasicItems: any;
  activeIndex: number = 0;

  ngOnInit(): void {
    this.behvaiourSer.setRefreshedStatus(false);

    this.dockBasicItems = [
      {
        label: 'Home',
        icon: "assets/images/home.png"
      },
      {
        label: 'Page1',
        icon: "assets/images/page1.png"
      },
      {
        label: 'Page2',
        icon: "assets/images/page2.png"
      },
      {
        label: 'Page3',
        icon: "assets/images/page3.png"
      },
      {
        label: 'Page4',
        icon: "assets/images/page4.png"
      },
    ];
  }

}
