import { createReducer } from '@ngrx/store';
import { User } from '../interfaces/user.interface';

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean | null;
}

export const authStateKey = '[auth] key';

export const AUTH_INITIAL_STATE: AuthState = {
  user: null,
  isLoggedIn: null,
};

export const authReducer = createReducer(AUTH_INITIAL_STATE);
