import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Comment, CommentsKey } from '../posts.model';

@Injectable({ providedIn: 'root' })
export class CommentsService extends EntityCollectionServiceBase<Comment> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(CommentsKey, serviceElementsFactory);
  }
}
