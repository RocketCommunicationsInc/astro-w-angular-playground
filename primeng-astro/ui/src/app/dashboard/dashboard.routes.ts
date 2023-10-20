import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { authGuard } from '../auth/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
];
