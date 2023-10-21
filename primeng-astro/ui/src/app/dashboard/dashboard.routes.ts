import { Routes } from '@angular/router';

import { Path } from '../shared';
import { authGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: Path.dashboard,
    component: DashboardComponent,
    canActivate: [authGuard],
  },
];
