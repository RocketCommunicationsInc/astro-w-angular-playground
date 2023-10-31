import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-albums-photos',
  standalone: true,
  imports: [CommonModule, TabViewModule, PanelModule, ButtonModule],
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.scss'],
})
export class AlbumsPhotosComponent {}
