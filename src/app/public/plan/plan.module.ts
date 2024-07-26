import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { PublicModule } from 'src/app/shared/components/public/public.module';

@NgModule({
  declarations: [PlanComponent],
  imports: [CommonModule, PlanRoutingModule, PublicModule],
})
export class PlanModule {}
