import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private utility: UtilityService){
    this.utility.breadcrumbs = "Home"

  }

}
