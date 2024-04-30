import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormaterPipe } from './currency-formater.pipe';
import { FormatTextPipe } from './formet-text.pipe';



@NgModule({
  declarations: [CurrencyFormaterPipe, FormatTextPipe],
  imports: [
    CommonModule
  ],
  exports:[CurrencyFormaterPipe,FormatTextPipe]
})
export class PipeModule { }
