import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputValidationDirective } from './input-validation.directive';



@NgModule({
  declarations: [InputValidationDirective],
  imports: [
    CommonModule
  ],
  exports:[InputValidationDirective]
})
export class InputModule { }
