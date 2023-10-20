import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { authResolver } from './auth.resolver';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
    providers: [AuthService],
    resolve: { users: authResolver },
  },
];
