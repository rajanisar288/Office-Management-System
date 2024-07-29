import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { PublicModule } from 'src/app/shared/components/public/public.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FeaturesRoutingModule, PublicModule],
})
export class FeaturesModule {}
