import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Location} from '@app/core/models/location.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Person} from '@app/core/models/person.model';
import {tap} from 'rxjs/operators';
import {Film} from '@app/core/models/film.model';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.scss']
})
export class LocationItemComponent implements OnInit {

  location$: Observable<Location>;
  people$: Observable<Person[]>;
  films$: Observable<Film[]>;
  filmsForLocationLoading$: Observable<boolean>;
  peopleForLocationLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.resetStore();
    this.people$ = this.store.select(fromStore.getPeopleForLocation);
    this.films$ = this.store.select(fromStore.getFilmsForLocation);
    this.filmsForLocationLoading$ = this.store.select(fromStore.getFilmsForLocationLoading);
    this.peopleForLocationLoading$ = this.store.select(fromStore.getPeopleForLocationLoading);
    this.location$ = this.store.select(fromStore.getSelectedLocation).pipe(
      tap((location: Location) => {
        if (location && location.residents && location.films) {
          this.store.dispatch(new fromStore.LoadPeopleForLocation(location.residents));
          this.store.dispatch(new fromStore.LoadFilmsForLocation(location.films));
        }
      })
    );
  }

  private resetStore() {
    this.store.dispatch(new fromStore.LoadFilmsForLocationSuccess([]));
    this.store.dispatch(new fromStore.LoadPeopleForLocationSuccess([]));
  }
}
