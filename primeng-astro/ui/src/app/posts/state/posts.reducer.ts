import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

import { optimisticUpdates } from 'src/app/shared';
import { CommentsKey, PostsKey } from '../posts.model';

export const commentsEntityMetadata: EntityMetadataMap = {
  [CommentsKey]: {
    entityDispatcherOptions: optimisticUpdates,
    // sortComparer: // TODO
  },
};

export const commentsEntityPluralNames: EntityPluralNames = {
  [CommentsKey]: CommentsKey,
};

export const postsEntityMetadata: EntityMetadataMap = {
  [PostsKey]: {
    entityDispatcherOptions: optimisticUpdates,
    // sortComparer: // TODO
  },
};

export const postsEntityPluralNames: EntityPluralNames = {
  [PostsKey]: PostsKey,
};
