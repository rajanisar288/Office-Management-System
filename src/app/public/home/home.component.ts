import { AfterViewInit, Component, Inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';
import { gsap } from 'gsap';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  isLightTheme: boolean = true;
  menuHideAndShow: boolean = true;
  modal = false;
  isDarkThemeActive: boolean = false;
  getTheme: any;
  isNavbarHide = true;
  test: any;

  constructor(
    @Inject(DOCUMENT) document: Document,
    private _authService: AuthService,
    private _utilityService: UtilityService
  ) {
    this.getTheme = localStorage.getItem('activeTheme');
  }

  ngOnInit() {
    if (this.getTheme === 'darkTheme') {
      document.body.classList.add('dark-theme');
      this.isDarkThemeActive = true;
    }
  }

  login() {
    this._utilityService.isLogin.next(true);
  }
  signup() {
    this._utilityService.isLogin.next(false);
  }

  navToggle() {
    let span1 = document.getElementById('span1');
    let span2 = document.getElementById('span2');
    let span3 = document.getElementById('span3');
    let nav = document.getElementById('homeNav');
    // navbarUnHide
    if (this.isNavbarHide == true) {
      span1?.classList.add('span1');
      span2?.classList.add('span2');
      span3?.classList.add('span3');
      nav?.classList.add('navbarUnHide');
      this.isNavbarHide = !this.isNavbarHide;
    } else {
      span1?.classList.remove('span1');
      span2?.classList.remove('span2');
      span3?.classList.remove('span3');
      nav?.classList.remove('navbarUnHide');
      this.isNavbarHide = true;
    }
  }

  // navToggle(e: any) {
  //   console.log(e.target);
  //   e.target.classList.toggle('navToggler-left');
  //   let navbar = document.getElementById('navbar');
  //   navbar?.classList.toggle('navbar-hide');
  //   //  let navbar =  document.getElementById('navbar-fluid')
  //   console.log(navbar);
  // }

  //NavbarToggle
  navbarHomeHideAndShow(data: any) {
    data.classList.remove('homeNavbarHide');
    console.log(data);
    this.menuHideAndShow = !this.menuHideAndShow;
    if (this.menuHideAndShow === true) {
      data.classList.add('homeNavbarHide');
    }
  }

  // themeSwitcher
  // themeSwitcher(){
  //   document.body.classList.add('dark-theme');
  //   this.isLightTheme = !this.isLightTheme;
  //   if(this.isLightTheme === true){
  //     document.body.classList.remove('dark-theme');
  //   }

  // }

  // activeDarkTheme() {
  //   this.isDarkThemeActive = !this.isDarkThemeActive;
  //   if (this.isDarkThemeActive) {
  //     document.body.classList.add('dark-theme');
  //     localStorage.setItem('activeTheme', 'darkTheme');
  //   } else {
  //     document.body.classList.remove('dark-theme');
  //     localStorage.setItem('activeTheme', 'lightTheme');
  //   }
  // }

  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.pageYOffset >= 10) {
      document.getElementById('homeNav')?.classList.add('stickyNavbar');
    } else if (window.pageYOffset <= 10) {
      document.getElementById('homeNav')?.classList.remove('stickyNavbar');
    }
  }

  ngAfterViewInit() {}
}
