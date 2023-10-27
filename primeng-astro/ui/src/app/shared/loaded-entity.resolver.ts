import { Observable, map, withLatestFrom } from 'rxjs';
import { ProviderToken, inject } from '@angular/core';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { Store, select } from '@ngrx/store';

import { selectUserState } from '../auth/state';

export const loadedEntityResolver = <T>(
  service: ProviderToken<EntityCollectionServiceBase<T>>,
): Observable<boolean> => {
  const dataEntityService = inject(service);
  const store = inject(Store);
  const user$ = store.pipe(select(selectUserState));

  return dataEntityService.loaded$.pipe(
    withLatestFrom(user$),
    map(([loaded, user]) => {
      if (!loaded && user) {
        dataEntityService.getWithQuery({ userId: user.id });
      }
      return loaded;
    }),
  );
};
