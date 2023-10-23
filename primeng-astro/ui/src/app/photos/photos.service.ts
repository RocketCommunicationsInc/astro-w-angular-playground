import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Photo, PhotosKey } from './photos.model';

@Injectable({ providedIn: 'root' })
export class PhotosService extends EntityCollectionServiceBase<Photo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(PhotosKey, serviceElementsFactory);
  }
}
