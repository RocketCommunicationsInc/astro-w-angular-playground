import { Routes } from '@angular/router';

import { Path } from '../shared';
import { AuthComponent } from './auth.component';
import { authResolver } from './auth.resolver';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: '/' + Path.login,
    pathMatch: 'full',
  },
  {
    path: Path.login,
    component: AuthComponent,
    resolve: { users: authResolver },
  },
];
