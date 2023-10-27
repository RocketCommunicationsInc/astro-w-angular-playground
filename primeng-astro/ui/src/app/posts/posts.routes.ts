import { Routes } from '@angular/router';

import { Path, loadedEntityResolver } from '../shared';
import { authGuard } from '../auth/auth.guard';
import { PostsService } from './services';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { postCommentsResolver } from './post-comments.resolver';

export const postsRoutes: Routes = [
  {
    path: Path.posts,
    canActivateChild: [authGuard],
    resolve: { posts: () => loadedEntityResolver(PostsService) },
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':postId',
        component: PostComponent,
        resolve: {
          comments: postCommentsResolver,
        },
      },
    ],
  },
];
