import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/adminlayout/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/adminlayout/qlbc', title: 'Quản lí báo cáo',  icon:'pe-7s-note2', class: '' },
    { path: '/adminlayout/qlsp', title: 'Quản lý sản phẩm',  icon:'pe-7s-note2', class: '' },
    { path: '/adminlayout/qluser', title: 'Quản lý người dùng',  icon:'pe-7s-user', class: '' },
    { path: '/adminlayout/qllsgd', title: 'Quản lý lịch sử giao dịch',  icon:'pe-7s-repeat', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
