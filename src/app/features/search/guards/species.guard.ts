import {Injectable} from '@angular/core';
import * as fromStore from '../store';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as guardUtils from './guard.util';


@Injectable()
export class SpeciesGuard implements CanActivate {

  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(): Observable<boolean> {
    return guardUtils.canActivate(
      this.store,
      fromStore.getSpeciesLoaded,
      new fromStore.LoadSpecies(),
    );
  }

}
