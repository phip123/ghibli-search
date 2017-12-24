import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {Film} from '@app/core/models/film.model';

@Injectable()
export class FilmService {
  private readonly baseUrl = 'https://ghibliapi.herokuapp.com/films/';

  constructor(private http: HttpClient) {
  }

  getAllFilms(): Observable<Film[]> {

    return this.http.get<Film[]>(this.baseUrl).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/${id}`).pipe(
      catchError(err => Observable.throw(err.json())),
    );
  }


}

