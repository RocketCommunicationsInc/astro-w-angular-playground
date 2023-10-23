import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

import { PhotosKey } from '../photos.model';

export const photosEntityMetadata: EntityMetadataMap = {
  [PhotosKey]: {},
};

export const phtosoEntityPluralNames: EntityPluralNames = {
  [PhotosKey]: PhotosKey,
};
