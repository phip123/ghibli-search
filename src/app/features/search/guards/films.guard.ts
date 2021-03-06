import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as guardUtil from './guard.util';

@Injectable()
export class FilmsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(): Observable<boolean> {
    return guardUtil.canActivate(
      this.store,
      fromStore.getFilmsLoaded,
      new fromStore.LoadFilms()
    );
  }

}
