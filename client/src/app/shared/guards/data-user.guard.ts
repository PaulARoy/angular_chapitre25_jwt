import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, mapTo, switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataUserGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<true> {
    return this.authService.user$.pipe(
      first(),
      switchMap((user: User | null): Observable<true> => {
        if (!user) {
          return this.authService.fetchCurrentUser().pipe(mapTo(true));
        } else {
          return of(true);
        }
      })
    );
  }
}
