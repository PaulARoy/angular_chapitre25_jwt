import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { AuthState, authReducer, authStateKey } from './auth.reducer';

export interface AppState {
  [authStateKey]: AuthState;
  router: RouterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  [authStateKey]: authReducer,
  router: routerReducer,
};
