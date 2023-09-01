import { Component } from '@angular/core';
import { MonitoringService } from './monitoring.service';

import { getRandom } from 'src/utils/get-random';

@Component({
  selector: 'app-root',
  template: ` <app-global-status-bar></app-global-status-bar> `,
  styles: [],
})
export class AppComponent {
  constructor(private monitoringService: MonitoringService) {
    const mutate = this.monitoringService.notifications.mutate;

    setInterval(() => {
      mutate((value) => (value.altitude = getRandom()));
    }, getRandom(4_000, 8_000));

    setInterval(() => {
      mutate((value) => (value.equipment = getRandom()));
    }, getRandom(8_000, 12_000));

    setInterval(() => {
      mutate((value) => (value.thermal = getRandom()));
    }, getRandom(6_000, 10_000));
  }
}
