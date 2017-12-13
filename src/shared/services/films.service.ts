import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class FilmService {
  private readonly api = 'https://ghibliapi.herokuapp.com/films/';

  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.api).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }
}
