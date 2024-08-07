import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [ProfileViewComponent],
  imports: [CommonModule],
  exports: [ProfileViewComponent],
})
export class ModelModule {}
