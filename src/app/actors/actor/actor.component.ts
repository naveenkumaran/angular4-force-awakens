import { Component, OnInit, Input } from '@angular/core';

import { IActor } from "../../shared/interfaces";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  @Input() actor: IActor;
  
  constructor() { }

  ngOnInit() {
  }

}
