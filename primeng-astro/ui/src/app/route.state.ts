import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer, getRouterSelectors } from '@ngrx/router-store';

// export relevant router selectors based off RouterSerializer
// prettier-ignore
export const {
  selectQueryParam,
  selectQueryParams,
  selectUrl,
} = getRouterSelectors();

export type RouterStateUrl = {
  url: string;
  params: Params;
  queryParams: Params;
  outlet: string;
};

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams, outlet },
    } = routerState;
    const { params } = route;

    /**
     * Only return an object including the url, params, query params,
     * and outlet instead of the entire snapshot
     */
    return { url, params, queryParams, outlet };
  }
}
