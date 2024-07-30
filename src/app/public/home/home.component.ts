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
