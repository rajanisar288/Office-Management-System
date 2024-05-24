import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  menuToggle: any;
  isSidebarCollapse: boolean = true;
  isThemeChangerActive: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _UtilityService: UtilityService
  ) {}
  ngOnInit() {}

  toggler() {
    this.menuToggle = document.querySelector('.toggle');
    this.menuToggle.classList.toggle('active');
    this.menuToggle.classList.toggle('toggleCollapse');
    this.isSidebarCollapse = !this.isSidebarCollapse;
    if (this.isSidebarCollapse === false) {
      this._UtilityService.isSidebarActive.next(true);
    } else {
      this._UtilityService.isSidebarActive.next(false);
    }
  }

  setting() {
    this.isThemeChangerActive = !this.isThemeChangerActive;
    setTimeout(() => {
      let btn = this.document.querySelectorAll('.sidebarChanger button');
      btn.forEach((_btn) => {
        _btn.addEventListener('click', () => {
          let _sideBar = this.document.querySelector('.sidebar');
          let _navbar = this.document.querySelector('.navbar');
          _navbar?.classList.remove(
            'bg-1',
            'bg-2',
            'bg-3',
            'bg-4',
            'bg-5',
            'defaultBg'
          );
          _sideBar?.classList.remove(
            'bg-1',
            'bg-2',
            'bg-3',
            'bg-4',
            'bg-5',
            'defaultBg'
          );
          _navbar?.classList.add(_btn.className);
          _sideBar?.classList.add(_btn.className);
        });
      });
    }, 1000);
  }
  activeDarkTheme() {
    this.document.body.classList.add('dark-theme');
  }
  activeLightTheme() {
    this.document.body.classList.remove('dark-theme');
  }
}
