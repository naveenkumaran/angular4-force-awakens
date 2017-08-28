import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdRadioModule, MdToolbarModule,
  MdIconModule, MdSidenavModule, MdCardModule, MdInputModule, MdSlideToggleModule, MdTooltipModule
} from '@angular/material';

import { ActorsRoutingModule, routedComponents} from './actors-routing.module';
import { ActorsService } from "./actors.service";

@NgModule({
  imports: [ 
    CommonModule, 
    ActorsRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdSlideToggleModule,
    MdTooltipModule
  ],
  declarations: [routedComponents],
  providers: [ActorsService],
})
export class ActorsModule { }
