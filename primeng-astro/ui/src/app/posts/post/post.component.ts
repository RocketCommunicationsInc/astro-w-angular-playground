import { map, withLatestFrom } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';

import { selectRouteParam } from 'src/app/route.state';
import { CommentsService, PostsService } from '../services';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `,
  ],
})
export class PostComponent {
  postId$ = this.store.pipe(select(selectRouteParam('postId')));

  post$ = this.postsService.entityMap$.pipe(
    withLatestFrom(this.postId$),
    map(([postsMap, postId]) => postsMap[postId || '']),
  );

  comments$ = this.commentsService.entities$.pipe(
    withLatestFrom(this.postId$),
    map(([comments, postId]) => {
      const id = postId || '';
      return comments.filter((c) => c.postId.toString() === id);
    }),
  );

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private store: Store,
  ) {}
}
