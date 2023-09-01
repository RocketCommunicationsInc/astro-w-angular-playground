import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from '@astrouxds/angular';

import { MonitoringService } from '../monitoring.service';

@Component({
  selector: 'app-global-status-bar',
  standalone: true,
  imports: [CommonModule, AstroComponentsModule],
  template: `
    <rux-global-status-bar
      includeIcon
      appName="Standalone"
      appDomain="Astro Angular"
      username="Devuser"
    >
      <rux-clock></rux-clock>
      <div slot="right-side">
        <rux-monitoring-icon
          icon="altitude"
          label="Altitude"
          [status]="monitoringService.altitudeStatus()"
          [notifications]="monitoringService.monitoring().altitude"
        ></rux-monitoring-icon>
        <rux-monitoring-icon
          icon="equipment"
          label="Equipment"
          [status]="monitoringService.equipmentStatus()"
          [notifications]="monitoringService.monitoring().equipment"
        ></rux-monitoring-icon>
        <rux-monitoring-icon
          icon="thermal"
          label="Thermal"
          [status]="monitoringService.thermalStatus()"
          [notifications]="monitoringService.monitoring().thermal"
        ></rux-monitoring-icon>
      </div>
    </rux-global-status-bar>
  `,
  styles: [
    `
      [slot='right-side'] {
        display: flex;
        justify-content: flex-end;
        gap: var(--spacing-4);
        min-width: 440px;
      }
    `,
  ],
})
export class GlobalStatusBarComponent {
  constructor(readonly monitoringService: MonitoringService) {}
}
