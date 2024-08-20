import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  //admin
  adminMenu = [
    {
      routeName: 'Dashboard',
      route: '/admin',
      icon: 'fa-thin fa-table-columns',
    },
    {
      routeName: 'Company Profile',
      icon: 'fa-thin fa-building',
      subMenu: [
        { routeName: 'Company', route: '/admin/company-profile' },
        { routeName: 'Managers', route: '/admin/total-managers' },
        { routeName: 'Employees', route: '/admin/total-employees' },
      ],
    },
    {
      routeName: 'My workspace',
      icon: 'fa-thin fa-briefcase',
      subMenu: [
        { routeName: 'Mails', route: '/admin/emails' },
        { routeName: 'Meetings', route: '/admin/meetings' },
        { routeName: 'Groups', route: '/admin/chat-groups' },
      ],
    },
    {
      routeName: 'Contact',
      route: '/contact',
      icon: 'fa-thin fa-address-book',
    },
    { routeName: 'Report', route: '/report', icon: 'fa-thin fa-bug' },
    { routeName: 'Setting', route: '/admin/setting', icon: 'fa-thin fa-gear' },
  ];

  //manager
  managerMenu = [
    { routeName: 'CEO', route: '/', icon: 'fa-solid fa-table-columns' },
    { routeName: 'Company', route: '/users', icon: 'fa-solid fa-users' },
    {
      routeName: 'Company Profile',
      icon: 'fa-brands fa-product-hunt',
      subMenu: [
        { routeName: 'Managers', route: '/products' },
        { routeName: 'Employees', route: 'companyProfile/managers' },
      ],
    },
    { routeName: 'Charts', route: '/charts', icon: 'fa-solid fa-chart-line' },
    { routeName: 'Tasks', route: '/tasks', icon: 'fa-solid fa-list-check' },
    {
      routeName: 'Contact',
      route: '/contact',
      icon: 'fa-regular fa-address-book',
    },
    {
      routeName: 'Calender',

      icon: 'fa-solid fa-calendar-days',
      subMenu: [
        { routeName: 'new', route: '/productssd' },
        { routeName: 'new2', route: 'companyProfile/managers' },
      ],
    },
    { routeName: 'Report', route: '/report', icon: 'fa-solid fa-bug' },
    { routeName: 'Team', route: '/team', icon: 'fa-solid fa-people-group' },
  ];
  constructor() {}
}
