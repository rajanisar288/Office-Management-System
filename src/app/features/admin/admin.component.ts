import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  title = 'portfolioApp';
  showLoader: boolean = true;
  constructor(private router: Router, private _utilityService: UtilityService) {
    this._utilityService.breadcrumbs = [
      { name: 'Welcome to Admin', route: '/admin' },
      { name: 'Profile', route: '/admin/company-profile' },
      { name: 'new', route: '/admin/company-profile' },
    ];
    this.router.events.subscribe((_routerEvent: RouterEvent | any) => {
      this.checkRouteChange(_routerEvent);
    });
  }

  checkRouteChange(routerEvent: RouterEvent) {
    // console.log('router event');
    // console.log(routerEvent);

    // if route change started
    if (routerEvent instanceof NavigationStart) {
      this.showLoader = true;
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.showLoader = false;
    }
  }
}
