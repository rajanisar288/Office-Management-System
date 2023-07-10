import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  {
    path: '', component:AdminComponent, children : [
      // {
      //   path: 'home', component:AdminHomeComponent
      // },
      {
        path:'project', component:ProjectsComponent
      }
    ]
  },
 
  // {
  //   path: 'admin', component:AdminComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
