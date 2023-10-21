import { getRouterSelectors } from '@ngrx/router-store';

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
