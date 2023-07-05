import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  ngOnInit() {
    localStorage.setItem("role", "admin")
    // document.body.classList.add('dark-theme');
  }
}
