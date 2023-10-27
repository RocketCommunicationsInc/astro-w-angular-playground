import { map } from 'rxjs';
import { inject } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import {
  DefaultDataServiceConfig,
  EntityActionFactory,
  EntityDataModuleConfig,
  EntityOp,
  ofEntityOp,
  ofEntityType,
} from '@ngrx/data';
import { Actions, FunctionalEffect, createEffect } from '@ngrx/effects';

import { User } from './auth/auth.model';
import { TodosKey } from './todos/todos.model';
import {
  authReducer,
  authEffects,
  authEntityMetadata,
  authEntityPluralNames,
} from './auth/state';
import { albumsEntityMetadata, albumsEntityPluralNames } from './albums/state';
import { photosEntityMetadata, phtosoEntityPluralNames } from './photos/state';
import { todosEntityMetadata, todosEntityPluralNames } from './todos/state';
import {
  commentsEntityMetadata,
  commentsEntityPluralNames,
  postsEntityMetadata,
  postsEntityPluralNames,
} from './posts/state';

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
  /**
   * this optimisticErrors$ effect function has been proven to be the correct
   * way to write an UNDO action on an other app. For some resonse it does not
   * work as expected in this app. Leaving this here to investigate more.
   */
  optimisticErrors$: createEffect(
    () => {
      const actions = inject(Actions);
      const entityActionFactory = inject(EntityActionFactory);
      return actions.pipe(
        ofEntityType([TodosKey]),
        ofEntityOp([EntityOp.SAVE_UPDATE_ONE_ERROR]),
        map((action) => {
          const id = action.payload.data.originalAction.payload.data.id;
          return entityActionFactory.create(
            action.payload.entityName,
            EntityOp.UNDO_ONE,
            id,
          );
        }),
      );
    },
    { functional: true },
  ),
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    ...authEntityMetadata,
    ...albumsEntityMetadata,
    ...photosEntityMetadata,
    ...todosEntityMetadata,
    ...postsEntityMetadata,
    ...commentsEntityMetadata,
  },
  pluralNames: {
    ...authEntityPluralNames,
    ...albumsEntityPluralNames,
    ...phtosoEntityPluralNames,
    ...todosEntityPluralNames,
    ...postsEntityPluralNames,
    ...commentsEntityPluralNames,
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

type AR = ActionReducer<AppState>;
const authMetaReducer = (reducer: AR): AR => {
  return (state, action) => {
    if (state) {
      // user logging in
      if (action.type === '[Login Page] User Login') {
        // drop entityCache from state
        state = { router: state.router, user: state.user };
      }
      // user logging out
      if (action.type === '[GSB - User Menu] Logout') {
        // drop entityCache from state and set user to null
        state = { router: state.router, user: null };
      }
    }
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<AppState>[] = [authMetaReducer];
