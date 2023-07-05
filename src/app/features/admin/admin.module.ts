import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TotallUserComponent } from './totall-user/totall-user.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ProjectsComponent } from './admin/projects/projects.component';


@NgModule({
  declarations: [
    TotallUserComponent,
    AdminComponent,
    AdminHomeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ]
})
export class AdminModule { }
