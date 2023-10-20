import { Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { PhotosComponent } from './photos.component';

export const photosRoutes: Routes = [
  {
    path: 'photos',
    canActivate: [authGuard],
    component: PhotosComponent,
    // providers: [AuthService],
    // resolve: { users: authResolver },
  },
];
