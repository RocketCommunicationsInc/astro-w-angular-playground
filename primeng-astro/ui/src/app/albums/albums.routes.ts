import { Routes } from '@angular/router';

import { Path, loadedEntityResolver } from '../shared';
import { authGuard } from '../auth/auth.guard';
import { AlbumsComponent } from './albums.component';
import { AlbumsService } from './albums.service';

export const albumsRoutes: Routes = [
  {
    path: Path.albums,
    canActivate: [authGuard],
    component: AlbumsComponent,
    resolve: { albums: () => loadedEntityResolver(AlbumsService) },
  },
];
