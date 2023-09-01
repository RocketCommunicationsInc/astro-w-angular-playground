import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { RuxStatus } from '@astrouxds/angular';

import { getRandom } from 'src/utils/get-random';

type Status = RuxStatus['status'];

interface Notifications {
  altitude: number;
  equipment: number;
  thermal: number;
}

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {
  public notifications: WritableSignal<Notifications> = signal({
    altitude: getRandom(),
    equipment: getRandom(),
    thermal: getRandom(),
  });

  public altitudeStatus: Signal<Status> = computed(() => {
    return this.setMonitoringStatus(this.notifications().altitude);
  });

  public equipmentStatus: Signal<Status> = computed(() => {
    return this.setMonitoringStatus(this.notifications().equipment);
  });

  public thermalStatus: Signal<Status> = computed(() => {
    return this.setMonitoringStatus(this.notifications().thermal);
  });

  private setMonitoringStatus(notifications: number): Status {
    if (notifications > 25 && notifications <= 50) return 'caution';
    if (notifications > 50 && notifications <= 75) return 'serious';
    if (notifications > 75) return 'critical';
    return 'normal';
  }
}
