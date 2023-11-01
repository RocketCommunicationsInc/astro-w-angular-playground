import { Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { Path, loadedEntityResolver } from '../shared';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';

export const todosRoutes: Routes = [
  {
    path: Path.todos,
    canActivate: [authGuard],
    component: TodosComponent,
    resolve: { todos: () => loadedEntityResolver(TodosService) },
    children: [
      {
        path: 'add-todo',
        component: CreateTodoComponent,
        outlet: 'modal',
      },
    ],
    data: {
      breadcrumb: 'Todos',
    },
  },
];
