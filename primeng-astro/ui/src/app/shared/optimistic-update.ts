import { EntityDispatcherDefaultOptions } from '@ngrx/data';

export const optimisticUpdates: EntityDispatcherDefaultOptions = {
  optimisticAdd: true,
  optimisticDelete: true,
  optimisticSaveEntities: true,
  optimisticUpdate: true,
  optimisticUpsert: true,
};
