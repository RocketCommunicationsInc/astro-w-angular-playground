import { FunctionalEffect } from '@ngrx/effects';

import { authEffects } from './auth/state';

export const appEffects: { [key: string]: FunctionalEffect } = {
  ...authEffects,
};
