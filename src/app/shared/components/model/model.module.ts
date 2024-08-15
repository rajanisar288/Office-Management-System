import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [ProfileViewComponent, ConfirmationComponent],
  imports: [CommonModule],
  exports: [ProfileViewComponent, ConfirmationComponent],
})
export class ModelModule {}
