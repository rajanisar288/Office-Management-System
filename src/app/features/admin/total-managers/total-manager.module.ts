import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalManagerRoutingModule } from './total-manager-routing.module';
import { TotalManagersComponent } from './total-managers.component';
import { ModelModule } from 'src/app/shared/components/model/model.module';
import { ToasterModule } from 'src/app/shared/components/toaster/toaster.module';

@NgModule({
  declarations: [TotalManagersComponent],
  imports: [
    CommonModule,
    TotalManagerRoutingModule,
    ModelModule,
    ToasterModule,
  ],
})
export class TotalManagerModule {}
