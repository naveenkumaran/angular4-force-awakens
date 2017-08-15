import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdRadioModule, MdToolbarModule,
          MdIconModule, MdSidenavModule, MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from './api/in-memory-store.service';

import { AppMenuService } from './app-nav-menu/app.menu.service';
import { ActorsService } from "./actors/shared/actors.service";

import { AppNavMenuComponent } from './app-nav-menu/app-nav-menu.component';
import { AppRoutingModule } from './app.routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ContentComponent } from './content/content.component';

import { ActorsModule } from './actors/actors.module';
import { ActorsComponent } from './actors/actors.component';

import { DevicesComponent } from './devices/devices.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdCardModule,   
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 600 }),
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    ActorsModule
  ],  
  declarations: [
    AppComponent,
    AppNavMenuComponent,
    DashboardComponent,
    ContentComponent,
    DevicesComponent
  ],
  providers:[ AppMenuService, ActorsService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(requestOptions: RequestOptions) {
    requestOptions.headers.set('Content-Type', 'application/json');
  }
}
