import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatGroupsRoutingModule } from './chat-groups-routing.module';
import { ChatGroupsComponent } from './chat-groups.component';

@NgModule({
  declarations: [ChatGroupsComponent],
  imports: [CommonModule, ChatGroupsRoutingModule],
})
export class ChatGroupsModule {}
