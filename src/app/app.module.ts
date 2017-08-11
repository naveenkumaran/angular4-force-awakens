import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppMenuService } from './app.menu.service';
import { AppNavMenuComponent } from './app-nav-menu/app-nav-menu.component';
import { AppRoutingModule } from './app.routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorsModule } from './actors/actors.module';
import { ActorsComponent } from './actors/actors.component';

import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavMenuComponent,
    DashboardComponent,
    ContentComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [AppMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
