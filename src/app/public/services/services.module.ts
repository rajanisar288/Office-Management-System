import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { PublicModule } from 'src/app/shared/components/public/public.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, ServicesRoutingModule, PublicModule],
})
export class ServicesModule {}
