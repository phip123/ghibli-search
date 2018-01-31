import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as fromServices from '@app/core/services';
import * as filmActions from '../actions/films.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class FilmsEffect {
  constructor(
    private actions$: Actions,
    private filmService: fromServices.FilmService,
  ) {}

  @Effect()
  loadFilms$ = this.actions$.ofType(filmActions.LOAD_FILMS).pipe(
    switchMap(() => {
      return this.filmService
        .getAllFilms()
        .pipe(
          map(films => new filmActions.LoadFilmsSuccess(films)),
          catchError(error => of(new filmActions.LoadFilmsFail(error))),
        );
    }),
  );

  @Effect()
  loadFilmsForLocation = this.actions$.ofType(filmActions.LOAD_FILMS_FOR_LOCATION).pipe(
    map((action: filmActions.LoadFilmsForLocation) => action.payload),
    switchMap((films: string []) => {
      return this.filmService.findFilmsForLocation(films)
        .pipe(
          map(films => new filmActions.LoadFilmsForLocationSuccess(films)),
          catchError(err => of(new filmActions.LoadFilmsForLocationFail(err))),
        );
    })
  );

  @Effect()
  loadFilm$ = this.actions$.ofType(filmActions.LOAD_FILM).pipe(
    map((action: filmActions.LoadFilm) => action.payload),
    switchMap((id: number) => {
      return this.filmService
        .getFilm(id)
        .pipe(
          map(film => new filmActions.LoadFilmSuccess(film)),
          catchError(error => of(new filmActions.LoadFilmFail(error))),
        );
    }),
  );
}
