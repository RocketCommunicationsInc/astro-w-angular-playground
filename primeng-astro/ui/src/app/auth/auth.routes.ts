import { Routes } from '@angular/router';

import { Path, loadedEntityResolver } from '../shared';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: '/' + Path.login,
    pathMatch: 'full',
  },
  {
    path: Path.login,
    component: AuthComponent,
    resolve: { users: () => loadedEntityResolver(AuthService) },
  },
];
