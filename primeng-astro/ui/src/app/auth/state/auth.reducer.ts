import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

import { User, userKey } from '../auth.model';
import { login, logout } from './auth.actions';

export const authReducer = createReducer<User | null>(
  null,
  on(login, (_, action) => action.payload),
  on(logout, () => null),
);

export const { selectUserState } = createFeature({
  name: 'user',
  reducer: authReducer,
});

export const authEntityMetadata: EntityMetadataMap = {
  [userKey]: {},
};

export const authEntityPluralNames: EntityPluralNames = {
  [userKey]: userKey,
};
