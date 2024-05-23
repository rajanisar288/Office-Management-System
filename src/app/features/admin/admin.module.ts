import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { ProfileComponent } from './profile/profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { TotalManagersComponent } from './total-managers/total-managers.component';
import { TotalEmployeesComponent } from './total-employees/total-employees.component';
import { FormKit } from 'src/app/shared/components/formkit.module';

@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    CompanyProfileComponent,
    TotalManagersComponent,
    TotalEmployeesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    RouterModule,
    FormKit,
    PipeModule,
  ],
})
export class AdminModule {}
