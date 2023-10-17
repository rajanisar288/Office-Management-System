import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormaterPipe } from './currency-formater.pipe';



@NgModule({
  declarations: [CurrencyFormaterPipe],
  imports: [
    CommonModule
  ],
  exports:[CurrencyFormaterPipe]
})
export class PipeModule { }
