import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./public/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'plan',
    loadChildren: () =>
      import('./public/plan/plan.module').then((m) => m.PlanModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./public/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./public/features/features.module').then((m) => m.FeaturesModule),
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
  // {
  //   path: 'home/signup',
  //   loadChildren: () =>
  //     import('./public/signup/signup.module').then((m) => m.SignupModule),
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
