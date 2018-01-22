import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {filter, map, switchMap, take, tap} from 'rxjs/operators';
import * as fromStore from '@app/features/search/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Dictionary} from '@ngrx/entity/src/models';
import {Species} from '@app/core/models/species.model';

@Injectable()
export class SpeciesExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.speciesId;
    return this.checkStore(id).pipe(
      switchMap(() => {
        return this.hasSpecies(id);
      })
    );
  }

  private hasSpecies(id: string): Observable<boolean> {
    return this.store
      .select(fromStore.getSpeciesEntities)
      .pipe(
        map((entities: { [key: number]: Species }) => !!entities[id]),
        take(1)
      );
  }

  private checkStore(id: string): Observable<boolean> {
    return this.store.select(fromStore.getSpeciesEntities).pipe(
      tap(entities => {
        if (!entities[id]) {
          this.store.dispatch(new fromStore.LoadSpeciesDetails(id));
        }
      }),
      map((entities: Dictionary<Species>) => {
        return !!entities[id];
      }),
      filter(d => d),
      take(1)
    );
  }
}
