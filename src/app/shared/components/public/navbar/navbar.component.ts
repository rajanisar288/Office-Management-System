import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbar = [
    { route: '/..', routerName: 'Home' },
    { route: '/features', routerName: 'Feature' },
    { route: '/services', routerName: 'Service' },
    { route: '/plan', routerName: 'Plan' },
  ];

  constructor(private _utilityService: UtilityService) {}

  login() {
    this._utilityService.isLogin.next(true);
  }
  signup() {
    this._utilityService.isLogin.next(false);
  }
}
