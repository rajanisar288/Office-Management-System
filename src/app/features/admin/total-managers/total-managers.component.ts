import { Component } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-total-managers',
  templateUrl: './total-managers.component.html',
  styleUrls: ['./total-managers.component.scss'],
})
export class TotalManagersComponent {
  managers = [
    {
      name: 'alex',
      age: 2,
      address: 'xyz',
      profile:
        'https://thumbs.dreamstime.com/b/photo-charming-cheerful-girl-beaming-smile-arms-hold-cuddle-book-isolated-bright-aquamarine-color-background-258635881.jpg',
      class: '8th',
      roll: 5855,
    },
    {
      name: 'alex',
      age: 28,
      address: 'xyz',
      profile:
        'https://thumbs.dreamstime.com/b/photo-charming-cheerful-girl-beaming-smile-arms-hold-cuddle-book-isolated-bright-aquamarine-color-background-258635881.jpg',
      class: '8th',
      roll: 5855,
    },
    {
      name: 'alex',
      age: 99,
      address: 'xyz',
      profile:
        'https://thumbs.dreamstime.com/b/photo-charming-cheerful-girl-beaming-smile-arms-hold-cuddle-book-isolated-bright-aquamarine-color-background-258635881.jpg',
      class: '8th',
      roll: 5855,
    },
    {
      name: 'alex',
      age: 25,
      address: 'xyz',
      profile:
        'https://thumbs.dreamstime.com/b/photo-charming-cheerful-girl-beaming-smile-arms-hold-cuddle-book-isolated-bright-aquamarine-color-background-258635881.jpg',
      class: '8th',
      roll: 5855,
    },
  ];
  selectedIndex: number | null = null;
  profileData: any = {};
  constructor(private _utilityService: UtilityService) {}

  openAction(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
    } else {
      this.selectedIndex = index;
    }
  }

  viewProfile(managerData: any) {
    this.profileData = {
      name: managerData.name,
      age: managerData.age,
    };
    this._utilityService.profileViewer.next(true);
  }
}
