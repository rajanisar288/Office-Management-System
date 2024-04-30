import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  {
    path: '', component:AdminComponent,children:[
      {path:'', component:DashboardComponent},
      // {path:'charts', component:ChartsComponent},
      {path:'products', component:ProductsComponent},
      {path:'users', component:UsersComponent},
      {path:'companyProfile/managers',component:UsersComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
