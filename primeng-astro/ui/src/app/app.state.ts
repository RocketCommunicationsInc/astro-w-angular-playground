import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { DefaultDataServiceConfig, EntityDataModuleConfig } from '@ngrx/data';
import { FunctionalEffect } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { User } from './auth/auth.model';
import {
  authReducer,
  authEffects,
  authEntityMetadata,
  authEntityPluralNames,
} from './auth/state';

export type AppState = {
  router: RouterReducerState;
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

const logger = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  /**
   * just an example of where something can be done
   * before it hits the reducers
   */
  return (state, action) => {
    // console.log(new Date().toISOString(), '[APP STATE]:', state);
    return reducer(state, action);
  };
};

const isProd = environment.production;
export const metaReducers: MetaReducer<AppState>[] = isProd ? [] : [logger];
