import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActorsRoutingModule, routedComponents} from './actors-routing.module';
import { ActorsService } from "./actors.service";

@NgModule({
  imports: [ CommonModule, ActorsRoutingModule, ],
  declarations: [routedComponents],
  providers: [ActorsService],
})
export class ActorsModule { }
