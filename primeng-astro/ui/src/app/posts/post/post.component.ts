import { map, withLatestFrom } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';

import { selectRouteParam } from 'src/app/route.state';
import { CommentsService, PostsService } from '../services';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    AccordionModule,
    DividerModule,
    SkeletonModule,
  ],
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
  comments$ = this.commentsService.entities$;
  postId$ = this.store.pipe(select(selectRouteParam('postId')));
  post$ = this.postsService.entityMap$.pipe(
    withLatestFrom(this.postId$),
    map(([postsMap, postId]) => postsMap[postId || '']),
  );
  loading$ = this.commentsService.loading$;
  skeletons = Array(4).fill(5);

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private store: Store,
  ) {}
}
