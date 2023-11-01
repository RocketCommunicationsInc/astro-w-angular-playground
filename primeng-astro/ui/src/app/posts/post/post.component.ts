import { map, withLatestFrom } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';

import { selectRouteParam } from 'src/app/route.state';
import { CommentsService, PostsService } from '../services';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PanelModule, AccordionModule, DividerModule],
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

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private store: Store,
  ) {}
}
