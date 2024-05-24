import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalEmployeeRoutingModule } from './total-employee-routing.module';
import { TotalEmployeesComponent } from './total-employees.component';

@NgModule({
  declarations: [TotalEmployeesComponent],
  imports: [CommonModule, TotalEmployeeRoutingModule],
})
export class TotalEmployeeModule {}
