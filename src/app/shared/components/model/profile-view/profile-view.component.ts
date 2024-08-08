import { Component, Input } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent {
  @Input('userData') userData?: any;
  isModelActive = false;
  imageView = false
  userProfile:string | undefined
  constructor(private _utilityService: UtilityService) {}
  ngOnInit() {}
  closeModel() {
    this._utilityService.profileViewer.next(false);
  }

  fullImage(profile:any){
    this.userProfile = profile
    this.imageView = true
  }
  exitFullIamge(){
    this.imageView = false
  }

  ngOnChanges() {
    console.log(this.userData);
    this._utilityService.profileViewer.subscribe(
      (res) => (this.isModelActive = res)
    );
  }
}
