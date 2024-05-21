import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./features/manager/manager.module').then((m) => m.ManagerModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./features/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./public/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
