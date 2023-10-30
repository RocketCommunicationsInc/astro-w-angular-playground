import { Routes } from '@angular/router';

import { Path, loadedEntityResolver } from '../shared';
import { authGuard } from '../auth/auth.guard';
import { PhotosComponent } from './photos.component';
import { PhotosService } from './photos.service';

export const photosRoutes: Routes = [
  {
    path: Path.photos,
    canActivate: [authGuard],
    component: PhotosComponent,
    resolve: { photos: () => loadedEntityResolver(PhotosService) },
    data: {
      breadcrumb: 'Photos',
    },
  },
];
