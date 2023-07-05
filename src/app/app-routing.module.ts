import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard]
  // },
  {
    path:'login' , component:LoginComponent
  },
  {
    path: '' , loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
