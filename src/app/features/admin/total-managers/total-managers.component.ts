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
      name: 'Alex',
      age: 22,
      address: 'London , United Kingdom',
      profile:
        'https://thumbs.dreamstime.com/b/photo-charming-cheerful-girl-beaming-smile-arms-hold-cuddle-book-isolated-bright-aquamarine-color-background-258635881.jpg',
      class: '8th',
      roll: 58587,
    },
    {
      name: 'Nisar Ahmed',
      age: 28,
      address: 'Karachi, Pakistan',
      profile:
        'https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=',
      class: '7th',
      roll: 5855,
    },
    {
      name: 'Aamir Khan',
      age: 30,
      address: 'Mumbai, India',
      profile:
        'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
      class: '11th',
      roll: 587955,
    },
    {
      name: 'Khalid Hussain',
      age: 32,
      address: 'Riyadh, Saudia Arbia',
      profile:
        'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
      class: 'BA ',
      roll: 585,
    },
  ];
  selectedIndex: number | null = null;
  userObj: any = {};
  constructor(private _utilityService: UtilityService) {}

  openAction(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
    } else {
      this.selectedIndex = index;
    }
  }

  

  viewProfile(userData: any) {
    this.userObj = {
      name: userData.name,
      age: userData.age,
      profile:userData.profile
    };
    this._utilityService.profileViewer.next(true);
  }
}
