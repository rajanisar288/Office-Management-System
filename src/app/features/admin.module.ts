import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../shared/components/ui.module';
import { PipeModule } from '../shared/pipes/pipe.module';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    RouterModule,
    UiModule,
    PipeModule
  ]
})
export class AdminModule { }
