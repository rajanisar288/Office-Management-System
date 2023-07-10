import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  name = localStorage.getItem('userName');
  desc = localStorage.getItem('desc');
 constructor(private _router: Router){}
  ngOnInit() {
    localStorage.setItem("role", "admin")
    // document.body.classList.add('dark-theme');
  }
   
  logOut(){
    localStorage.clear();
    this._router.navigateByUrl('');
  }
}
