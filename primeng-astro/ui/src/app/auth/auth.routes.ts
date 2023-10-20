import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { authResolver } from './auth.resolver';
import { AuthService } from './services/auth.service';
import { AuthDataService } from './services/auth-data.service';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
    providers: [AuthService, AuthDataService],
    resolve: {
      users: authResolver,
    },
  },
];
