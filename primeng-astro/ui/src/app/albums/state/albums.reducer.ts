import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

import { AlbumsKey } from '../albums.model';

export const albumsEntityMetadata: EntityMetadataMap = {
  [AlbumsKey]: {},
};

export const albumsEntityPluralNames: EntityPluralNames = {
  [AlbumsKey]: AlbumsKey,
};
