import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: ProfileComponent },
      {
        path: 'admin/company-profile',
        loadChildren: () =>
          import('./company-profile/company-profile.module').then(
            (m) => m.CompanyProfileModule
          ),
      },
      {
        path: 'admin/total-managers',
        loadChildren: () =>
          import('./total-managers/total-manager.module').then(
            (m) => m.TotalManagerModule
          ),
      },
      {
        path: 'admin/total-employees',
        loadChildren: () =>
          import('./total-employees/total-employee.module').then(
            (m) => m.TotalEmployeeModule
          ),
      },
      {
        path: 'admin/emails',
        loadChildren: () =>
          import('./workspace/emails/email.module').then(
            (m) => m.EmailGroupsModule
          ),
      },
      {
        path: 'admin/meetings',
        loadChildren: () =>
          import('./workspace/meetings/meeting.module').then(
            (m) => m.MeetingModule
          ),
      },
      {
        path: 'admin/chat-groups',
        loadChildren: () =>
          import('./workspace/chat-groups/chat-groups.module').then(
            (m) => m.ChatGroupsModule
          ),
      },
      {
        path: 'admin/setting',
        loadChildren: () =>
          import('./setting/setting.module').then((m) => m.SettingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
