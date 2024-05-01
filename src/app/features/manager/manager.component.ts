import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent {
  constructor(private _utilityService: UtilityService) {
    this._utilityService.breadcrumbs = 'Welcome to Manager :)';
  }
}
