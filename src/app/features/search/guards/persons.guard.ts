import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';


@Injectable()
export class PersonsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPeopleLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPersons());
        }
      }),
      filter(loaded => loaded),
      take(1),
    );
  }
}
