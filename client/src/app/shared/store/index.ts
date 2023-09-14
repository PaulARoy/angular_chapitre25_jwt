import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { AuthState, authReducer } from './auth.reducer';

export interface AppState {
  auth: AuthState;
  router: RouterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  router: routerReducer,
};
