import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { InputModule } from 'src/app/shared/directives/input/input.module';
import { SignupComponent } from './signup.component';
import { FormKit } from 'src/app/shared/components/formkit.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignupRoutingModule, InputModule, FormKit],
})
export class SignupModule {}
