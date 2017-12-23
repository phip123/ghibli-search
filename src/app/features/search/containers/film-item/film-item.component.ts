import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Film } from '@app/core/models/film.model';
import { Person } from '@app/core/models/person.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit {
  film$: Observable<Film>;
  people$: Observable<Person[]>;

  constructor(private store: Store<fromStore.SearchState>) {}

  ngOnInit() {
    this.film$ = this.store.select(fromStore.getSelectedFilm).pipe(
      tap((film: Film) => {
        this.store.dispatch(new fromStore.LoadPersonsForFilm(film.id));
        this.people$ = this.store.select(fromStore.getSelectedPeople);
      }),
    );
    //TODO select location, people etc.
  }
}
