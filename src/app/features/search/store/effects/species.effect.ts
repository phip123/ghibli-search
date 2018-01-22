import * as fromServices from '@app/core/services';
import * as speciesActions from '../actions/species.action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SpeciesEffect {
  constructor(
    private actions$: Actions,
    private speciesService: fromServices.SpeciesService,
  ) {}

  @Effect()
  loadSpeciesForPerson$ = this.actions$
    .ofType(speciesActions.LOAD_SPECIES_FOR_PERSON)
    .pipe(
      map((action: speciesActions.LoadSpeciesForPerson) => action.payload),
      switchMap((id: string) => {
        return this.speciesService
          .getSpeciesForPerson(id)
          .pipe(
            map(
              species =>
                new speciesActions.LoadSpeciesForPersonSuccess(species),
            ),
            catchError(err =>
              of(new speciesActions.LoadSpeciesForPersonFail(err)),
            ),
          );
      }),
    );

  @Effect()
  loadAllSpecies$ = this.actions$.ofType(speciesActions.LOAD_SPECIES).pipe(
    switchMap(() => {
      return this.speciesService
        .getAllSpecies()
        .pipe(
          map(species => new speciesActions.LoadSpeciesSuccess(species)),
          catchError(error => of(new speciesActions.LoadSpeciesFail(error)))
        );
    }),
  );

  @Effect()
  loadOneSpecies$ = this.actions$.ofType(speciesActions.LOAD_SPECIES_DETAIL).pipe(
    map((action: speciesActions.LoadSpeciesDetails) => action.payload),
    switchMap((id: string) => {
      return this.speciesService
        .getSpecies(id)
        .pipe(
          map(species => new speciesActions.LoadSpeciesDetailsSuccess(species)),
          catchError(error => of(new speciesActions.LoadSpeciesFail(error)))
        );
    })
  );
}
