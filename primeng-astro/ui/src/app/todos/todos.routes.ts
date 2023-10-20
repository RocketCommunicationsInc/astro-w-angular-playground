import { Routes } from '@angular/router';

import { authGuard } from '../auth/auth.guard';
import { TodosComponent } from './todos.component';

export const todosRoutes: Routes = [
  {
    path: 'todos',
    canActivate: [authGuard],
    component: TodosComponent,
    // providers: [AuthService],
    // resolve: { users: authResolver },
  },
];
