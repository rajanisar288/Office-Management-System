import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { MenuServiceService } from 'src/app/shared/services/menu-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  menuList: any;
  role = localStorage.getItem('role');
  title:boolean = true
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _utilityService: UtilityService,
    private _menuService: MenuServiceService
  ) {
    if (this.role == 'admin') {
      this.menuList = this._menuService.adminMenu;
    } else if (this.role == 'manager') {
      this.menuList = this._menuService.managerMenu;
    }
  }
  ngOnInit() {
    this._utilityService.isSidebarActive.subscribe((data) => {
      if (!data === false) {
        this.hideSideBar();
        this.title = false
      } else {
        this.showSideBar();
        this.title = true
      }
    });
  }

  hideSideBar() {
    let ul = this.document.getElementById('sideBarUl');
    ul?.classList.add('hideUl');
  }

  showSideBar() {
    let ul = this.document.getElementById('sideBarUl');
    ul?.classList.remove('hideUl');
  }

  subMenuDropDown() {
    let btn = this.document.querySelectorAll('.subMenuBtn');
    btn.forEach((el) => {
      el.addEventListener('click', () => {
        el.nextElementSibling?.classList.toggle('hideSubMenu');
      });
    });
  }

  ngAfterViewInit() {
    this.subMenuDropDown();
  }
}
