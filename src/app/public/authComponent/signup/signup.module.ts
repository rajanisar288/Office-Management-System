import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { InputModule } from 'src/app/shared/directives/input/input.module';



@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    InputModule
  ]
})
export class SignupModule { }
