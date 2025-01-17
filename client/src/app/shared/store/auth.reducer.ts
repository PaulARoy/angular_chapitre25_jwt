import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean | null;
  error: string | null;
}

export const authStateKey = '[auth] key';

export const AUTH_INITIAL_STATE: AuthState = {
  user: null,
  isLoggedIn: null,
  error: null,
};

export const authReducer = createReducer(
  AUTH_INITIAL_STATE,
  on(
    AuthActions.fetchCurrentUserSuccessAction,
    AuthActions.connexionSuccessAction,
    (state: AuthState, { user }: { user: User | null }): AuthState => {
      return { ...state, user: user, isLoggedIn: user != null, error: null };
    }
  ),
  on(
    AuthActions.inscriptionErrorAction,
    AuthActions.connexionErrorAction,
    (state: AuthState, { error }: { error: string }): AuthState => {
      return { ...state, error: error };
    }
  ),
  on(AuthActions.logoutSuccessAction, (state: AuthState): AuthState => {
    return { ...state, user: null, isLoggedIn: false, error: null };
  })
);
