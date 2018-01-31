import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {filter, map, switchMap, take, tap} from 'rxjs/operators';
import {Dictionary} from '@ngrx/entity/src/models';
import {Location} from '@app/core/models/location.model';


@Injectable()
export class LocationExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.locationId;
    return this.checkStore(id).pipe(
      switchMap(() => {
        return this.hasLocation(id);
      })
    );
  }

  private hasLocation(id: string): Observable<boolean> {
    return this.store
      .select(fromStore.getLocationEntities)
      .pipe(
        map((entities: { [key: string]: Location }) => !!entities[id]),
        take(1)
      );
  }

  private checkStore(id: string): Observable<boolean> {
    return this.store.select(fromStore.getLocationEntities).pipe(
      tap(entities => {
        if (!entities[id]) {
          this.store.dispatch(new fromStore.LoadLocation(id));
        }
      }),
      map((entities: Dictionary<Location>) => {
        return !!entities[id];
      }),
      filter(d => d),
      take(1)
    );
  }
}
