import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums.component.html',
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
export class AlbumsComponent {
  albums$ = this.albumsService.entities$;

  constructor(private albumsService: AlbumsService) {}
}
