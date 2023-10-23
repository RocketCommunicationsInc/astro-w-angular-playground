import { Observable, tap } from 'rxjs';
import { ProviderToken, inject } from '@angular/core';
import { EntityCollectionServiceBase } from '@ngrx/data';

export const loadedEntityResolver = <T>(
  service: ProviderToken<EntityCollectionServiceBase<T>>,
): Observable<boolean> => {
  const dataEntityService = inject(service);

  return dataEntityService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        dataEntityService.getAll();
      }
    }),
  );
};
