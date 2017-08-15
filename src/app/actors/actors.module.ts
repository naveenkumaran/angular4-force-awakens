import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActorsRoutingModule, routedComponents} from './actors-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ActorsService } from "./shared/actors.service";

@NgModule({
  imports: [ CommonModule, SharedModule, ActorsRoutingModule, ],
  declarations: [routedComponents],
  providers: [ActorsService],
})
export class ActorsModule { }
