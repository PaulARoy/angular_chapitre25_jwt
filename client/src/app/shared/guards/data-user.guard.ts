import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { first, switchMap, Observable, mapTo, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';

export const dataUserGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.user$.pipe(
    first(),
    switchMap((user: User | null): Observable<true> => {
      if (!user) {
        return authService.fetchCurrentUser().pipe(mapTo(true));
      } else {
        return of(true);
      }
    })
  );
};
