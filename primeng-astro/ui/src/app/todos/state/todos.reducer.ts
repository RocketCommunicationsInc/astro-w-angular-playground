import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

import { optimisticUpdates } from 'src/app/shared';
import { Todo, TodosKey } from '../todos.model';

export const todosEntityMetadata: EntityMetadataMap = {
  [TodosKey]: {
    sortComparer: (t1: Todo, t2: Todo) => t1.id - t2.id,
    filterFn: (todos: Todo[], query = '') => {
      return todos.filter((todo) => {
        return todo.title.toLowerCase().includes(query.toLowerCase());
      });
    },
    entityDispatcherOptions: optimisticUpdates,
  },
};

export const todosEntityPluralNames: EntityPluralNames = {
  [TodosKey]: TodosKey,
};
