import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, LayoutComponent, PreLoaderComponent],

  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
