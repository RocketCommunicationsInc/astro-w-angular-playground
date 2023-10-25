import { EntityDispatcherDefaultOptions } from '@ngrx/data';

export const optimisticUpdates: EntityDispatcherDefaultOptions = {
  optimisticAdd: false,
  optimisticDelete: true,
  optimisticSaveEntities: true,
  optimisticUpdate: true,
  optimisticUpsert: true,
};
