import {Injectable} from '@angular/core';

import * as fromServices from '@app/core/services';
import * as peopleActions from '../actions/people.actions';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PersonsEffect {

  constructor(
    private actions$: Actions,
    private personsService: fromServices.PersonsService,
  ) {}

  @Effect()
  loadPeopleForFilm$ = this.actions$.ofType(peopleActions.LOAD_PERSONS_FOR_FILM).pipe(
    map((action: peopleActions.LoadPersonsForFilm) => action.payload),
    switchMap((id: string) => {
      return this.personsService
        .findPeopleForFilm(id)
        .pipe(
          map(people => new peopleActions.LoadPersonsForFilmSuccess(people)),
          catchError(error => of(new peopleActions.LoadPersonsForFilmFail(error)))
        );
    }),
  );

  @Effect()
  loadPeople$ = this.actions$.ofType(peopleActions.LOAD_PERSONS).pipe(
    switchMap(() => {
      return this.personsService
        .getAllPeople()
        .pipe(
          map(people => new peopleActions.LoadPersonsSuccess(people)),
          catchError(error => of(new peopleActions.LoadPersonsFail(error)))
        );
    })
  );

}
