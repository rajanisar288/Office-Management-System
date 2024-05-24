import { Component, Inject } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  breadcrumbs: any | undefined;
  menuToggle: any;
  sideMenu: boolean = true;
  navMenu = false;
  constructor(
    private _utilityService: UtilityService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.breadcrumbs = this._utilityService.breadcrumbs;
    console.log(this.breadcrumbs);
  }

  toggler() {
    this.menuToggle = document.querySelector('.toggle');
    this.menuToggle.classList.toggle('active');
  }
  navMenuBtn() {
    let _navMenu = document.getElementById('nav-menu');
    if (this.navMenu == false) {
      _navMenu?.classList.add('open-nav');
      _navMenu?.classList.remove('hide-nav');
      this.navMenu = !this.navMenu;
    } else {
      this.navMenu = !this.navMenu;
      _navMenu?.classList.add('hide-nav');
      _navMenu?.classList.remove('open-nav');
    }
    console.log(this.navMenu);
  }
}
