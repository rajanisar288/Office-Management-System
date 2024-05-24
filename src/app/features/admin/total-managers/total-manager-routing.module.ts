import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalManagersComponent } from './total-managers.component';

const routes: Routes = [{ path: '', component: TotalManagersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalManagerRoutingModule {}
