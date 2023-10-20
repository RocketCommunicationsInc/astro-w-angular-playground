import { Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { AlbumsComponent } from './albums.component';

export const albumsRoutes: Routes = [
  {
    path: 'albums',
    canActivate: [authGuard],
    component: AlbumsComponent,
    // providers: [AuthService],
    // resolve: { users: authResolver },
  },
];
