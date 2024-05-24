import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { emailRoutingModule } from './email-routing.module';
import { EmailsComponent } from './emails.component';

@NgModule({
  declarations: [EmailsComponent],
  imports: [CommonModule, emailRoutingModule],
})
export class EmailGroupsModule {}
