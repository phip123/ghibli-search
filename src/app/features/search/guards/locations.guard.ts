import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as guardUtils from './guard.util';

@Injectable()
export class LocationsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(): Observable<boolean> {
    return guardUtils.canActivate(
      this.store,
      fromStore.getLocationsLoaded,
      new fromStore.LoadLocations(),
    );
  }
}
