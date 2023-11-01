import { createRouterSelector, getRouterSelectors } from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParam,
  selectQueryParams,
  selectRouteData,
  selectRouteDataParam,
  selectRouteParam,
  selectRouteParams,
  selectTitle,
  selectUrl,
} = getRouterSelectors();

export const selectRouterState = createRouterSelector();

export const selectActivatedRouteSnapshot = createSelector(
  selectRouterState,
  (router: RouterReducerState) => router && router.state,
);

export const selectActivatedRouteSnapshotRoot = createSelector(
  selectActivatedRouteSnapshot,
  (state) => state && state.root,
);
