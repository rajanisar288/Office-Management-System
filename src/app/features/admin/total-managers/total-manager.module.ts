import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalManagerRoutingModule } from './total-manager-routing.module';
import { TotalManagersComponent } from './total-managers.component';

@NgModule({
  declarations: [TotalManagersComponent],
  imports: [CommonModule, TotalManagerRoutingModule],
})
export class TotalManagerModule {}
