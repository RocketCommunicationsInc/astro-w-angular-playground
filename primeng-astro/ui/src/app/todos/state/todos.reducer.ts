import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

import { TodosKey } from '../todos.model';

export const todosEntityMetadata: EntityMetadataMap = {
  [TodosKey]: {},
};

export const todosEntityPluralNames: EntityPluralNames = {
  [TodosKey]: TodosKey,
};
