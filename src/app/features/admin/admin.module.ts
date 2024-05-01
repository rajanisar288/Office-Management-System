import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { UiModule } from 'src/app/shared/components/ui.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    RouterModule,
    UiModule,
    PipeModule,
  ],
})
export class AdminModule {}
