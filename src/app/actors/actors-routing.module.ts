import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsComponent } from "./actors.component";
import { ActorsListComponent } from "./actors-list/actors-list.component";
import { ActorComponent } from "./actor/actor.component";

const routes: Routes = [
  {
    path: '',
    component: ActorsComponent,
    children: [
      { path: '', component: ActorsListComponent },
      { path: ':id',component: ActorComponent, },
    ]
  },
];


@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule { }

export const routedComponents = [ActorsComponent, ActorsListComponent, ActorComponent, ];