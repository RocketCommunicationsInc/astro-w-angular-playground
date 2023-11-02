import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, PanelModule, CardModule, SkeletonModule],
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
  loading$ = this.albumsService.loading$;
  skeletons = Array(2).fill(2);

  constructor(private albumsService: AlbumsService) {}
}
