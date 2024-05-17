import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { TotalManagersComponent } from './total-managers/total-managers.component';
import { TotalEmployeesComponent } from './total-employees/total-employees.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'admin/company-profile', component: CompanyProfileComponent },
      { path: 'admin/total-managers', component: TotalManagersComponent },
      { path: 'admin/total-employee', component: TotalEmployeesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
