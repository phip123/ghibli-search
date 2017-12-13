import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as fromServices from '../../../shared/services';
import * as filmActions from '../actions/films.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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
}
