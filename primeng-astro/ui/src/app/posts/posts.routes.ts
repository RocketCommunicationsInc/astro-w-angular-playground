import { Routes } from '@angular/router';

import { Path, loadedEntityResolver } from '../shared';
import { authGuard } from '../auth/auth.guard';
import { CommentsService, PostsService } from './services';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

export const postsRoutes: Routes = [
  {
    path: Path.posts,
    canActivateChild: [authGuard],
    resolve: { posts: () => loadedEntityResolver(PostsService) },
    data: {
      breadcrumb: 'Posts',
    },
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':postId',
        component: PostComponent,
        resolve: {
          comments: () => loadedEntityResolver(CommentsService),
        },
        data: {
          breadcrumb: 'Post',
        },
      },
    ],
  },
];
