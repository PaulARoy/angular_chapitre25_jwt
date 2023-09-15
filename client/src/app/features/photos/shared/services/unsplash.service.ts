import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../interfaces/photo.interface';
import { createApi } from 'unsplash-js';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private accesKey = 'd95NSjcpe--PsvG1TboDL2GBA8RIwLEOKNDC-J5ZcNs';

  private unsplash = createApi({
    accessKey: this.accesKey,
  });

  constructor(private http: HttpClient) {}

  public searchPhotos(query: string): Observable<Photo[]> {
    console.log('searching', query);
    return from(
      this.unsplash.search.getPhotos({ query: query, orientation: 'squarish' })
    ).pipe(
      map((result: any) =>
        result.response?.results.map((r: any) => ({ url: r.urls.small }))
      )
    );
  }
}
