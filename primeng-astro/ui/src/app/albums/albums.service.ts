import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Album, AlbumsKey } from './albums.model';

@Injectable({ providedIn: 'root' })
export class AlbumsService extends EntityCollectionServiceBase<Album> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(AlbumsKey, serviceElementsFactory);
  }
}
