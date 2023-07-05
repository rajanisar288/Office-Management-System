import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';
 
@Component({
  selector: 'app-totall-user',
  templateUrl: './totall-user.component.html',
  styleUrls: ['./totall-user.component.scss']
})
export class TotallUserComponent {
  constructor(private utility:UtilityService ){
    this.utility.breadcrumbs = "user-list"
  }

}
