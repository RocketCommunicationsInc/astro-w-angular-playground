import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstroComponentsModule } from '@astrouxds/angular';

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
          label="Monitoring"
          status="normal"
          notifications="999"
        ></rux-monitoring-icon>
        <rux-monitoring-icon
          icon="altitude"
          label="Monitoring"
          status="normal"
          notifications="1500"
        ></rux-monitoring-icon>
        <rux-monitoring-icon
          icon="altitude"
          label="Monitoring"
          status="normal"
          notifications="10000000000"
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
export class GlobalStatusBarComponent {}
