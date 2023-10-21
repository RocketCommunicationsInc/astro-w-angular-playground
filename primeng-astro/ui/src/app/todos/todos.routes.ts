import { Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { loadedEntityResolver } from '../shared';

export const todosRoutes: Routes = [
  {
    path: 'todos',
    canActivate: [authGuard],
    component: TodosComponent,
    resolve: { todos: () => loadedEntityResolver(TodosService) },
  },
];
