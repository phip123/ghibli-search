import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';
import {Dictionary} from '@ngrx/entity/src/models';


@Injectable()
export class FilmExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.SearchState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.filmId;
    return this.checkStore(id).pipe(
      switchMap(() => {
        return this.hasFilm(id);
      })
    );
  }

  private hasFilm(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getFilmsEntities)
      .pipe(
        map((entities: { [key: number]: Film }) => !!entities[id]),
        take(1)
      );
  }

  private checkStore(id: number): Observable<boolean> {
    return this.store.select(fromStore.getFilmsEntities).pipe(
      tap(entities => {
        if (!entities[id]) {
          this.store.dispatch(new fromStore.LoadFilm(id));
        }
      }),
      map((entities: Dictionary<Film>) => {
        return !!entities[id];
      }),
      filter(d => d),
      take(1)
    );
  }
}
