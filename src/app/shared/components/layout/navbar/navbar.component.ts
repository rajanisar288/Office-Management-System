import { Component, Inject } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  breadcrumbs : string |  undefined
  menuToggle:any
  sideMenu:boolean = true
  constructor (private  _utilityService:UtilityService, @Inject(DOCUMENT) private document: Document){
    this.breadcrumbs = this._utilityService.breadcrumbs  
  }

  toggler(){
    this.menuToggle = document.querySelector('.toggle');
    this.menuToggle.classList.toggle('active')

  }

}

