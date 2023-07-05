import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  breadcrumbs : string |  undefined
  constructor (private  _utilityService:UtilityService){
    this.breadcrumbs = this._utilityService.breadcrumbs   
  }

}
