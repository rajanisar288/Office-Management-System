import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IoDropdownComponent } from './io-dropdown.component';
import { DropdownValueComponent } from './dropdown-value/dropdown-value.component';






@NgModule({
  declarations: [
    IoDropdownComponent,
    DropdownValueComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
   IoDropdownComponent,
   DropdownValueComponent
  ]
})
export class dropdown { }
