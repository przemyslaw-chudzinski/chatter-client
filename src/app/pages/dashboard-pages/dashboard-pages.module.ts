import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPagesComponent } from './dashboard-pages.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {MatIconModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: DashboardPagesComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
  declarations: [DashboardPagesComponent, DashboardPageComponent]
})
export class DashboardPagesModule {}
