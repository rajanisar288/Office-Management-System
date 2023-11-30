import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { AuthService } from 'src/app/auth/auth.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  isLightTheme: boolean = true;
  menuHideAndShow: boolean = true
  modal = false;

  
  
  constructor(@Inject(DOCUMENT) document: Document,private _authService:AuthService){

  }

  ngOnInit() { }
      
 
  navToggle(e:any){
    console.log(e.target);
    e.target.classList.toggle('navToggler-left')
    let navbar = document.getElementById('navbar')
    navbar?.classList.toggle('navbar-hide')
  //  let navbar =  document.getElementById('navbar-fluid')
   console.log(navbar);
  }
  
  //NavbarToggle
  navbarHomeHideAndShow(data:any){
    data.classList.remove('homeNavbarHide')
    console.log(data)
    this.menuHideAndShow = !this.menuHideAndShow;
      if(this.menuHideAndShow === true){
        data.classList.add('homeNavbarHide')
      }
  }

  // themeSwitcher
  themeSwitcher(){
    document.body.classList.add('dark-theme');
    this.isLightTheme = !this.isLightTheme;
    if(this.isLightTheme === true){
      document.body.classList.remove('dark-theme');
    }
     
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    if(window.pageYOffset >= 10){
      document.getElementById('navbarHome')?.classList.remove('top-20')
      document.getElementById('navbarHome')?.classList.add('top')
      document.getElementById('navbarHome')?.classList.add('bg-light')
    }else if(window.pageYOffset <= 10){
      document.getElementById('navbarHome')?.classList.add('top-20')
      document.getElementById('navbarHome')?.classList.remove('top')
      document.getElementById('navbarHome')?.classList.remove('bg-light')
    }
}

  ngAfterViewInit() {
  }
}
