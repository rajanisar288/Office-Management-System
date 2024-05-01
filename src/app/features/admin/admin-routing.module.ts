import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';


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
