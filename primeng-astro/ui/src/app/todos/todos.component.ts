import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `,
  ],
})
export class TodosComponent {
  todos$ = this.todosService.entities$;

  constructor(private todosService: TodosService) {}
}
