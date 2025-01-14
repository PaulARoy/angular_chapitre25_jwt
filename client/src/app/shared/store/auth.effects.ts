import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { EMPTY, of } from 'rxjs';
import { Credentials, User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  tryFetchCurrentUserAction = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryFetchCurrentUserAction),
      switchMap(() =>
        this.authService.fetchCurrentUser().pipe(
          map((user: User | null) =>
            AuthActions.fetchCurrentUserSuccessAction({ user })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  tryInscriptionAction = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryInscriptionAction),
      switchMap(({ user }: { user: User }) =>
        this.authService.inscription(user).pipe(
          switchMap(() => {
            this.router.navigateByUrl('/connexion');
            return EMPTY;
          }),
          catchError((err) =>
            of(
              AuthActions.inscriptionErrorAction({
                error: err.error ? err.error : 'Une erreur est survenue',
              })
            )
          )
        )
      )
    )
  );

  tryConnexionAction = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryConnexionAction),
      switchMap(({ credentials }: { credentials: Credentials }) =>
        this.authService.connexion(credentials).pipe(
          map((user: User) => {
            this.router.navigateByUrl('/');
            return AuthActions.connexionSuccessAction({ user });
          }),
          catchError((err) =>
            of(
              AuthActions.connexionErrorAction({
                error: err.error ? err.error : 'Une erreur est survenue',
              })
            )
          )
        )
      )
    )
  );

  tryLogoutAction = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryLogoutAction),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.router.navigateByUrl('/');
            return AuthActions.logoutSuccessAction();
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
