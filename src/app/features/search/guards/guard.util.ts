import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Action, Selector, Store} from '@ngrx/store';
import {SearchState} from '../store';

export function canActivate(store: Store<SearchState>, sel: Selector<SearchState, boolean>, loadAction: Action): Observable<boolean> {
  return checkStore(store, sel, loadAction).pipe(
    switchMap(() => of(true)),
    catchError(() => of(false)),
  );
}

export function checkStore(store: Store<SearchState>, sel: Selector<SearchState, boolean>, loadAction: Action): Observable<boolean> {
  return store.select(sel).pipe(
    tap(loaded => {
      if (!loaded) {
        store.dispatch(loadAction);
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1),
  );
}
