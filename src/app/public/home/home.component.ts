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

  skills = [
    {
      language:'Angular',
      experience: 'mid',
      icon:'fa-brands fa-angular',
      per:50
    },
    {
      language:'Node js',
      experience: 'mid',
      icon:'fa-brands fa-node-js',
      per:50
    },
    {
      language:'JavaScript',
      experience: 'senior',
      icon:'fa-brands fa-js',
      per:50
    },
    {
      language:'Bootstrap',
      experience: 'mid',
      icon:'fa-brands fa-bootstrap',
      per:50
    },
    {
      language:'Git',
      experience: 'mid',
      icon:'fa-brands fa-github',
      per:50
    },
    {
      language:'Sass',
      experience: 'mid',
      icon:'fa-brands fa-sass',
      per:50
    }

  ]
  
  constructor(@Inject(DOCUMENT) document: Document,private _authService:AuthService  ){}

  ngOnInit() {
   let  landingPage =  document.getElementsByClassName('home-navbar')
   let item = document.getElementsByClassName('mene-item')
   let detailCard = document.getElementById('detailCard')
   let socialCard = document.getElementById('socialCard')
   let linkedin = document.getElementsByClassName('linkedin')
   let facebook = document.getElementsByClassName('facebook')
   let twitter = document.getElementsByClassName('twitter')
   let instagram = document.getElementsByClassName('instagram')
    const gsapTimeLine = gsap.timeline()
          gsapTimeLine.from(landingPage,{
            opacity:0,
          }).from(item,{
            scale:2,
            letterSpacing:-10,
            opacity:0,
            
          }).from(detailCard, {
            y:50,
            scale:2,
            skew:20,
            opacity:0,
            duration:1
           
          }).from(socialCard, {
            y:50,
            scale:2,
            opacity:0,
            duration:1

          })
        }
      

  //show  Modal
  openModal(){
    this.modal = true
  }
  //hide Modal
  hideModal(){
    this.modal = false
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
