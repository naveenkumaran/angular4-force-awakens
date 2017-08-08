import { Component, OnInit } from '@angular/core';

import { AppMenuService } from './app.menu.service';
import { menuItemData } from './app.menu.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Demo app!!!';

  constructor(private menuService: AppMenuService) {
    // Set menu items during component init
    menuService.items = menuItemData;
  }

  ngOnInit() {
    
  }
  
}
