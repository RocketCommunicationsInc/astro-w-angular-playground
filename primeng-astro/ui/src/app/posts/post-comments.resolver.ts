import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { CommentsService } from './services';

export const postCommentsResolver: ResolveFn<boolean> = (activeRoute) => {
  const commentsService = inject(CommentsService);
  const postId = activeRoute.params['postId'];
  commentsService.getWithQuery({ postId });
  return true;
};
