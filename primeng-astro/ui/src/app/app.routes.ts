import { Routes } from '@angular/router';

import { authRoutes } from './auth/auth.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { albumsRoutes } from './albums/albums.routes';
import { photosRoutes } from './photos/photos.routes';
import { postsRoutes } from './posts/posts.routes';
import { todosRoutes } from './todos/todos.routes';

export const routes: Routes = [
  ...authRoutes,
  ...dashboardRoutes,
  ...albumsRoutes,
  ...photosRoutes,
  ...postsRoutes,
  ...todosRoutes,
  {
    path: '**',
    redirectTo: '/login',
  },
];
