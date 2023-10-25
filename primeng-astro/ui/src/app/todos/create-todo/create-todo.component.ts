import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { selectUserState } from 'src/app/auth/state';
import { selectUrl } from 'src/app/route.state';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  templateUrl: './create-todo.component.html',
  styles: [],
  imports: [
    CommonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
})
export class CreateTodoComponent implements AfterViewInit {
  @ViewChild('addInput') input?: ElementRef<HTMLInputElement | undefined>;
  url$ = this.store.pipe(select(selectUrl));
  isLoading$ = this.todosService.loading$;
  user$ = this.store.pipe(select(selectUserState));
  value = '';
  parentUrl = '';

  constructor(
    private router: Router,
    private todosService: TodosService,
    private store: Store,
  ) {
    this.url$.pipe(takeUntilDestroyed()).subscribe((url) => {
      const splitUrl = url.split('/');
      this.parentUrl = splitUrl[splitUrl.length - 2];
    });
  }

  ngAfterViewInit(): void {
    this.input?.nativeElement?.focus();
  }

  onClose() {
    this.router.navigateByUrl(this.parentUrl);
  }

  onSubmit(userId: number) {
    const addedTodo = this.todosService.add({
      userId,
      title: this.value,
      completed: false,
      id: 0, // set to zero and will be ignored by the server
    });

    addedTodo.subscribe({
      next: () => this.router.navigateByUrl(this.parentUrl),
      error: (err) => console.warn(err.message),
    });
  }
}
