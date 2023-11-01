import { Routes } from '@angular/router';

import { Path, loadedEntityResolver } from '../shared';
import { authGuard } from '../auth/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { AlbumsService } from '../albums/albums.service';
import { PhotosService } from '../photos/photos.service';
import { PostsService } from '../posts/services';
import { TodosService } from '../todos/todos.service';
import { CreateTodoComponent } from '../todos/create-todo/create-todo.component';

export const dashboardRoutes: Routes = [
  {
    path: Path.dashboard,
    component: DashboardComponent,
    canActivate: [authGuard],
    data: {
      breadcrumb: 'Dashboard',
    },
    children: [
      {
        path: 'add-todo',
        component: CreateTodoComponent,
        outlet: 'modal',
      },
    ],
    resolve: [
      () => loadedEntityResolver(AlbumsService),
      () => loadedEntityResolver(PhotosService),
      () => loadedEntityResolver(PostsService),
      () => loadedEntityResolver(TodosService),
    ],
  },
];
