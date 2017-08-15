import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IActor } from "../shared/interfaces";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  actors : Observable<IActor[]>;

  ngOnInit() {
    this.getDashboardData();
  }

  // returns observable.. subscribed to be in the html directly.
  getDashboardData(): Observable<IActor[]> {
    this.actors = this.dashboardService.getDashboardData();
    return this.actors;
  } 
}
