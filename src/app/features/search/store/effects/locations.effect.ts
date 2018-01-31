import * as fromServices from '@app/core/services';
import * as locationActions from '../actions/locations.action';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';

@Injectable()
export class LocationsEffect {
  constructor(private actions$: Actions,
              private locationService: fromServices.LocationService) {
  }

  @Effect()
  loadLocations$ = this.actions$.ofType(locationActions.LOAD_LOCATIONS).pipe(
    switchMap(() => {
      return this.locationService.getAllLocations()
        .pipe(
          map(locations => new locationActions.LoadLocationsSuccess(locations)),
          catchError(error => of(new locationActions.LoadLocationsFail(error))),
        );
    })
  );

  @Effect()
  loadLocation$ = this.actions$.ofType(locationActions.LOAD_LOCATION).pipe(
    map((action: locationActions.LoadLocation) => action.payload),
    switchMap(id => {
      return this.locationService.getLocation(id).pipe(
        map(location => new locationActions.LoadLocationSuccess(location)),
        catchError(error => of(new locationActions.LoadLocationFail(error))),
      );
    })
  );

}
