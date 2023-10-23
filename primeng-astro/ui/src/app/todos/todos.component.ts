import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, PanelModule, ButtonModule, DataViewModule],
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
