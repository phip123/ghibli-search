import * as fromServices from '@app/core/services';
import * as speciesActions from '../actions/species.action';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class SpeciesEffect {

  constructor(private actions$: Actions,
              private speciesService: fromServices.SpeciesService,) {
  }

  @Effect()
  loadSpeciesForPerson$ = this.actions$.ofType(speciesActions.LOAD_SPECIES_FOR_PERSON).pipe(
    map((action: speciesActions.LoadSpeciesForPerson) => action.payload),
    switchMap((id: string) => {
      return this.speciesService
        .getSpeciesForPerson(id)
        .pipe(
          map(species => new speciesActions.LoadSpeciesForPersonSuccess(species)),
          catchError(err => of(new speciesActions.LoadSpeciesForPersonFail(err)))
        );
    })
  );
}
