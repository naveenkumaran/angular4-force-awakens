import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorsComponent } from './actors/actors.component';

/***************************************************************
* Perform eager to lazy routing.
*
*****************************************************************/
export const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent , },
  { path: 'dashboard', pathMatch: 'full', component: ActorsComponent, },
  /** default route if nothing given after context path */
  { path: '', pathMatch: 'full', component: DashboardComponent },
  /** default route for anything crap given after context path. avoids 404 */
  { path: '**', pathMatch: 'full', component: DashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],// Root router 
  exports: [RouterModule]
})
export class AppRoutingModule { }
