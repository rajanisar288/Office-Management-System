import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputValidationDirective } from './input-validation.directive';
import { InputPasswordValidationDirective } from './inputPassword-validation.directive';



@NgModule({
  declarations: [
    InputValidationDirective,
    InputPasswordValidationDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InputValidationDirective,
    InputPasswordValidationDirective
  ]
})
export class InputModule { }
