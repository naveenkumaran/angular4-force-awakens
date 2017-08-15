import { Injectable } from '@angular/core';


export interface MenuItem {

  text: string, 
  icon: string, // glyphicon md
  route: string, 
  submenu: Array<MenuItem>
}


@Injectable()
export class AppMenuService {

  
  items: Array<MenuItem>;
  
  constructor() { 

    
  }

}
