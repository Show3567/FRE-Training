import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtistApiServiceService {
  private baseUrl: string = 'https://itunes.apple.com/search?';

  constructor(private http: HttpClient) {}

  getArtistData(artist: string): Observable<ArtistApiServiceService> {
    const params = new URLSearchParams([
      ['term', artist],
      ['media', 'music'],
      ['entity', 'album'],
      ['attribute', 'artistTerm'],
      ['limit', '200'],
    ]);
    const result = params.toString();
    return this.http.get<ArtistApiServiceService>(this.baseUrl + result);
  }
}
