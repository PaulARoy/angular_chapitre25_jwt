import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authStateKey } from './auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthState>(authStateKey);

export const selectCurrentUser = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.user
);

export const selectIsLoggedIn = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.isLoggedIn
);

export const selectError = createSelector(
  selectAuthFeature,
  (authState: AuthState) => authState.error
);
