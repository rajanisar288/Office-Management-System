import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  isLightTheme: boolean = true;
  menuHideAndShow: boolean = true
  
  constructor(@Inject(DOCUMENT) document: Document){}

  ngOnInit() {
       document.body.classList.add('dark-theme');
  }
  navbarHomeHideAndShow(data:any){
    data.classList.remove('homeNavbarHide')
    console.log(data)
    this.menuHideAndShow = !this.menuHideAndShow;
      if(this.menuHideAndShow === true){
        data.classList.add('homeNavbarHide')
      }
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    if(window.pageYOffset >= 10){
      document.getElementById('navbarHome')?.classList.remove('top-20')
      document.getElementById('navbarHome')?.classList.add('top')
    }else if(window.pageYOffset <= 10){
      document.getElementById('navbarHome')?.classList.add('top-20')
      document.getElementById('navbarHome')?.classList.remove('top')
    }
}






  ngAfterViewInit() {
  }

  // changeTheme(){
  //   document.body.classList.add('dark-theme');
  //   this.isLightTheme = !this.isLightTheme;
  //   if(this.isLightTheme === true){
  //     document.body.classList.remove('dark-theme');
  //   }
  // }
}
