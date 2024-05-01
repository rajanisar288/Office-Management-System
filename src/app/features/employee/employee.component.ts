import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  constructor(private _utilityService: UtilityService) {
    this._utilityService.breadcrumbs = 'Welcome to Employee';
  }
}
