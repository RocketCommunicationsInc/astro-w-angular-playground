import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { DefaultDataServiceConfig, EntityDataModuleConfig } from '@ngrx/data';
import { FunctionalEffect } from '@ngrx/effects';

import { User } from './auth/auth.model';
import {
  authReducer,
  authEffects,
  authEntityMetadata,
  authEntityPluralNames,
} from './auth/state';

export type AppState = {
  router: RouterState;
  user: User | null;
};

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  user: authReducer,
};

export const appEffects: { [key: string]: FunctionalEffect } = {
  ...authEffects,
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    ...authEntityMetadata,
  },
  pluralNames: {
    ...authEntityPluralNames,
  },
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: '/api/v1',
  getDelay: 1000,
  saveDelay: 1000,
};

export const DefaultDataServiceProvider = {
  provide: DefaultDataServiceConfig,
  useValue: defaultDataServiceConfig,
};
