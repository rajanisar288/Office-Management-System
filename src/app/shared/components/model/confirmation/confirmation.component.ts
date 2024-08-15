import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  msg: string = '';
  isView: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private _utilityService: UtilityService) {}

  ngOnInit(): void {
    this.subscription = this._utilityService.confirmation$.subscribe(
      (confirmation) => {
        this.msg = confirmation.msg;
        this.isView = confirmation.isView;
      }
    );
  }

  closeModel() {
    this.isView = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  confirm() {
    this._utilityService.confirmDelete();
  }

  cancel() {
    this._utilityService.cancelDelete();
  }
}
