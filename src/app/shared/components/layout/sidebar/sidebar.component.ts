import { Component } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
menuList = [
  {routeName:'Dashboard', route:'/', icon:'fa-solid fa-table-columns'},
  {routeName:'Users',   route:'/users', icon:'fa-solid fa-users'},
  {routeName:'Products', route:'/products', icon:'fa-brands fa-product-hunt'},
  {routeName:'Charts',   route:'/charts', icon:'fa-solid fa-chart-line'},
  {routeName:'Tasks', route:'/tasks', icon:'fa-solid fa-list-check'},
  {routeName:'Contact', route:'/contact', icon:'fa-regular fa-address-book'},
  {routeName:'Calender', route:'/calender', icon:'fa-solid fa-calendar-days'},
  {routeName:'Report', route:'/report', icon:'fa-solid fa-bug'},
  {routeName:'Team', route:'/team', icon:'fa-solid fa-people-group'},
]
 constructor(){}
  ngOnInit(){
  }
   

}
