import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IActor } from "../shared/interfaces";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router) { }

  actors : Observable<IActor[]>;
  
  ngOnInit() {
    this.getDashboardData();
  }

  // returns observable.. subscribed to be in the html directly.
  getDashboardData(): Observable<IActor[]> {
    this.actors = this.dashboardService.getDashboardData();
    return this.actors;
  }  

  showDetail(actor: IActor) {
    const link = ['/actors', actor.id];
    console.log("Navigating to " + link);
    this.router.navigate(link);
  }
  
}
