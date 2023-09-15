import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  public searchPhotos(query: string): Observable<Photo[]> {
    return of([]);
  }
}
