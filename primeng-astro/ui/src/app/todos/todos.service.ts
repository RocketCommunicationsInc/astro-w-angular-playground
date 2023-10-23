import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Todo, TodosKey } from './todos.model';

@Injectable({ providedIn: 'root' })
export class TodosService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(TodosKey, serviceElementsFactory);
  }
}
