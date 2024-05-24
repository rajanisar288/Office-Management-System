import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGroupsComponent } from './chat-groups.component';

const routes: Routes = [{ path: '', component: ChatGroupsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatGroupsRoutingModule {}
