import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { User, UsersKey } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(UsersKey, serviceElementsFactory);
  }
}
