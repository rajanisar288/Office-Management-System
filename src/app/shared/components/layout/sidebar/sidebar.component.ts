import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
menuList = [
  {routeName:'CEO', route:'/', icon:'fa-solid fa-table-columns'},
  {routeName:'Company',   route:'/users', icon:'fa-solid fa-users'},
  {routeName:'Company Profile', icon:'fa-brands fa-product-hunt',
    subMenu:[
      {routeName:'Managers', route:'/products'},
      {routeName:'Employees', route:'companyProfile/managers'},
      {routeName:'New employees', route:'companyProfile/managers'}

    ]
  },
  {routeName:'Charts',   route:'/charts', icon:'fa-solid fa-chart-line'},
  {routeName:'Tasks', route:'/tasks', icon:'fa-solid fa-list-check'},
  {routeName:'Contact', route:'/contact', icon:'fa-regular fa-address-book'},
  {routeName:'Calender', route:'/calender', icon:'fa-solid fa-calendar-days'},
  {routeName:'Report', route:'/report', icon:'fa-solid fa-bug'},
  {routeName:'Team', route:'/team', icon:'fa-solid fa-people-group'},
]
subMenuHide = true
 constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(){
  }
   
  openSubMenu(){
    let subMenu = this.document.getElementById('subMenu')
   if(this.subMenuHide === false){
    subMenu?.classList.add('hideSubMenu')
    this.subMenuHide = true
   }else{
   subMenu?.classList.remove('hideSubMenu')
   this.subMenuHide = false
   }
  }

}
