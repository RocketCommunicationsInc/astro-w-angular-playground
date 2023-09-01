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

interface Monitoring {
  altitude: number;
  equipment: number;
  thermal: number;
}

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {
  public monitoring: WritableSignal<Monitoring> = signal({
    altitude: getRandom(),
    equipment: getRandom(),
    thermal: getRandom(),
  });

  public altitudeStatus: Signal<Status> = computed(() => {
    return this.setMonitoringStatus(this.monitoring().altitude);
  });

  public equipmentStatus: Signal<Status> = computed(() => {
    return this.setMonitoringStatus(this.monitoring().equipment);
  });

  public thermalStatus: Signal<Status> = computed(() => {
    return this.setMonitoringStatus(this.monitoring().thermal);
  });

  private setMonitoringStatus(notifications: number): Status {
    if (notifications > 25 && notifications <= 50) return 'caution';
    if (notifications > 50 && notifications <= 75) return 'serious';
    if (notifications > 75) return 'critical';
    return 'normal';
  }
}
