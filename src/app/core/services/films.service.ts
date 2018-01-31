import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {Film} from '@app/core/models/film.model';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Injectable()
export class FilmService {
  private readonly baseUrl = 'https://ghibliapi.herokuapp.com/films/';

  constructor(private http: HttpClient) {
  }

  public getAllFilms(): Observable<Film[]> {

    return this.http.get<Film[]>(this.baseUrl).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  public getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/${id}`).pipe(
      catchError(err => Observable.throw(err.json())),
    );
  }


  public findFilmsForLocation(films: string[]): Observable<Film[]> {
    const list = films.map(f => this.http.get<Film>(f).pipe(
      catchError(err => Observable.throw(err.json())),
    ));

    return forkJoin(...list);
  }
}

