import { map } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

import { selectUserState } from '../auth/state';
import { TodosService } from './todos.service';
import { Todo } from './todos.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      .p-inputtext {
        border: none;
      }
    `,
  ],
})
export class TodosComponent {
  updatedTitle = '';
  user$ = this.store.pipe(select(selectUserState));
  todos$ = this.todosService.filteredEntities$;

  completedTodosIds$ = this.todosService.entities$.pipe(
    map((todos) => {
      return todos.reduce((acc, curr) => {
        if (curr.completed) acc.push(curr.id);
        return acc;
      }, [] as number[]);
    }),
  );

  constructor(private todosService: TodosService, private store: Store) {}

  onSearch(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.todosService.setFilter(value);
  }

  onCheck(todo: Todo) {
    this.todosService.update({ ...todo, completed: !todo.completed });
  }

  onDelete(todo: Todo) {
    this.todosService.delete(todo);
  }

  onBlur(todo: Todo) {
    if (todo.title === this.updatedTitle) return;
    this.todosService.update({ ...todo, title: this.updatedTitle });
  }

  onKeypress(todo: Todo, keyboardEvent: KeyboardEvent) {
    const enterPressed = keyboardEvent.key === 'Enter';
    const isTitleDiff = todo.title !== this.updatedTitle;

    if (enterPressed && isTitleDiff) {
      this.todosService.update({ ...todo, title: this.updatedTitle });
    }
  }
}
