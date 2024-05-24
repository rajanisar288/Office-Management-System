import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalEmployeesComponent } from './total-employees.component';

const routes: Routes = [
  {
    path: '',
    component: TotalEmployeesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalEmployeeRoutingModule {}
