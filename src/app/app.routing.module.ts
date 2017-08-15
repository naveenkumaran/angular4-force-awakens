import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule } from '@angular/router';

import { PreloadSelectedModulesList } from './preload-strategy';

import { DashboardComponent } from './dashboard/dashboard.component';

/***************************************************************
* Perform eager to lazy routing.
*
*****************************************************************/
export const routes: Routes = [
  //{ path: 'dashboard', pathMatch: 'full', loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard', pathMatch: 'full',  component: DashboardComponent },
  { path: 'actors', pathMatch: 'full', loadChildren:'app/actors/actors.module#ActorsModule', data: { preload: true }},
  /** default route if nothing given after context path */
  { path: '', pathMatch: 'full',  component: DashboardComponent },
  /** default route if nothing given after context path */
  { path: '**', pathMatch: 'full',  redirectTo: 'dashboard', },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],// Root router 
  exports: [RouterModule],
  providers:[ PreloadSelectedModulesList, ]
})
export class AppRoutingModule { }
