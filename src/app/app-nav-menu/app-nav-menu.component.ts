import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMenuService } from './app.menu.service';
import { MenuItem } from './app.menu.service';
import { menuItemData } from './app.menu.data';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './app-nav-menu.component.html',
  styleUrls: ['./app-nav-menu.component.css']
})

export class AppNavMenuComponent implements OnInit {


  menuItems: MenuItem[];

  constructor(private menuService: AppMenuService) { 
    menuService.items = menuItemData; 
    this.menuItems = menuService.items;
  }

  ngOnInit() {
  }

}
