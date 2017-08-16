import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule } from '@angular/router';

import { PreloadSelectedModulesList } from './preload-strategy';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from "./devices/devices.component";
// import { ActorsListComponent } from "./actors/actors-list/actors-list.component";
// import { ActorComponent } from "./actors/actor/actor.component";


/***************************************************************
* Perform eager to lazy routing.
* Module loading fails for more than one module. Look at web pack loader module.
*
*****************************************************************/
export const routes: Routes = [
  //{ path: 'dashboard', pathMatch: 'full', loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard', pathMatch: 'full',  component: DashboardComponent, data: { preload: true } },
  { path: 'devices', pathMatch: 'full',  component: DevicesComponent },
  // Eager loading
//  { path : 'actors', children : [
//    { path: '',  component: ActorsListComponent },
//    { path: 'actors/:id',  component: ActorComponent },
//  ]},
  // Lazy Loading, with Preload strategy
  { path: 'actors', pathMatch: 'full', loadChildren:'app/actors/actors.module#ActorsModule' },
  /** default route if nothing given after context path */
  { path: '', pathMatch: 'full',  component: DashboardComponent, data: { preload: true }},
  /** default route if nothing given after context path */
  { path: '**', pathMatch: 'full',  component: DashboardComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],// Root router 
  exports: [RouterModule],
  providers:[ PreloadSelectedModulesList, ]
})
export class AppRoutingModule { }
