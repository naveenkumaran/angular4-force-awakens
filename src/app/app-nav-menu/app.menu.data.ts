import { MenuItem } from './app.menu.service';

export let menuItemData : Array<MenuItem> =  [{

  text: 'Dashboard', 
  icon: 'glyphicon-dashboard', // glyphicon md
  route: '/dashboard', 
  submenu: null
},
{
  text: 'Devices', 
  icon: 'glyphicon-wrench', // glyphicon md
  route: '/devices', 
  submenu: null
},
{
  text: 'Users', 
  icon: 'glyphicon-wrench', // glyphicon md
  route: '/actors', 
  submenu: null
  
}
];
