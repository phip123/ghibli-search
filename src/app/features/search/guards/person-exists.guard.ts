import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {filter, map, switchMap, take, tap} from 'rxjs/operators';
import * as fromStore from '@app/features/search/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Dictionary} from '@ngrx/entity/src/models';
import {Person} from '@app/core/models/person.model';

@Injectable()
export class PersonExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.personId;
    return this.checkStore(id).pipe(
      switchMap(() => {
        return this.hasPerson(id);
      })
    );
  }

  private hasPerson(id: string): Observable<boolean> {
    return this.store
      .select(fromStore.getPeopleEntities)
      .pipe(
        map((entities: { [key: number]: Person }) => !!entities[id]),
        take(1)
      );
  }

  private checkStore(id: string): Observable<boolean> {
    return this.store.select(fromStore.getPeopleEntities).pipe(
      tap(entities => {
        if (!entities[id]) {
          this.store.dispatch(new fromStore.LoadPerson(id));
        }
      }),
      map((entities: Dictionary<Person>) => {
        return !!entities[id];
      }),
      filter(d => d),
      take(1)
    );
  }
}
