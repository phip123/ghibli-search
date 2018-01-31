import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Location} from '@app/core/models/location.model';
import * as urls from '../util/url.constants';
import {catchError} from 'rxjs/operators';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {
  }

  public getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(urls.locationsUrl).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  public getLocation(id: string): Observable<Location> {
    return this.http.get<Location>(`${urls.locationsUrl}/${id}`).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }
}
