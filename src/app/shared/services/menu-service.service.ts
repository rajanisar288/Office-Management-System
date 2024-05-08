import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  //admin
  adminMenu = [
    { routeName: 'My Profile', route: '/', icon: 'fa-solid fa-user' },
    { routeName: 'Company Profile', icon: 'fa-regular fa-building',
    subMenu: [
      { routeName: 'Company', route: 'companyProfile/managers' },
      { routeName: 'Managers', route: '/products' },
      { routeName: 'Employees', route: 'companyProfile/managers' },
    ],
    },
    {
      routeName: 'Contact',
      route: '/contact',
      icon: 'fa-regular fa-address-book',
    },
    { routeName: 'Report', route: '/report', icon: 'fa-solid fa-bug' },
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