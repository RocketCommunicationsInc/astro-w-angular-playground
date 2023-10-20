import { Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
  {
    path: 'posts',
    canActivate: [authGuard],
    component: PostsComponent,
    // providers: [AuthService],
    // resolve: { users: authResolver },
  },
];
