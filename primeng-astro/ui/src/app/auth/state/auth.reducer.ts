import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../auth.model';
import { login, logout } from './auth.actions';

export const initialAuthState: User | null = null;

export const authReducer = createReducer<User | null>(
  initialAuthState,
  on(login, (_, action) => action.payload),
  on(logout, () => null)
);

export const { selectUserState } = createFeature({
  name: 'user',
  reducer: authReducer,
});
