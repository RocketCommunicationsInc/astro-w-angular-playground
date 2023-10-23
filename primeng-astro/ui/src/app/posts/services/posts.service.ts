import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Post, PostsKey } from '../posts.model';

@Injectable({ providedIn: 'root' })
export class PostsService extends EntityCollectionServiceBase<Post> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(PostsKey, serviceElementsFactory);
  }
}
