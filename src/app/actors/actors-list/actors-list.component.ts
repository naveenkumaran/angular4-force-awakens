import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { IActor } from "../../shared/interfaces";
import { ActorsService } from "../actors.service";

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})

export class ActorsListComponent implements OnDestroy, OnInit  {

  actors: IActor[] = [];
  private onDestroy = new Subject();

  constructor(private actorsService: ActorsService) { }

  ngOnInit() {
    this.getActors();
  }

  ngOnDestroy() {
    this.onDestroy.next(true);
  }
 
  getActors() {
      this.actors = [];
      this.actorsService.getActors().subscribe( 
        actors => { this.actors = actors; },
        err => console.log("error retrieving data"),
        () => "completed subscribing."
      );
  }

  /**
   * 
   * @param index 
   * @param actors
   * 
   * Associate actor id with the anchor tag.
   *  
   */
  trackByActors(index: number, actors: IActor) {
    return actors.id;
  } 
}
