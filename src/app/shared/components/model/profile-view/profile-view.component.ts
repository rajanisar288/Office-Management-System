import { Component, Input } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent {
  @Input('profileData') profileData?: any;
  isModelActive = false;
  constructor(private _utilityService: UtilityService) {}
  ngOnInit() {}
  closeModel() {
    this._utilityService.profileViewer.next(false);
  }

  ngOnChanges() {
    console.log(this.profileData);
    this._utilityService.profileViewer.subscribe(
      (res) => (this.isModelActive = res)
    );
  }
}
