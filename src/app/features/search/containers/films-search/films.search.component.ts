import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SearchState} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromStore from '../../store';
import {Film} from '@app/core/models/film.model';

@Component({
  selector: 'app-search',
  templateUrl: './films.search.component.html',
  styleUrls: ['./films.search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsSearchComponent implements OnInit {
  films$: Observable<Film[]>;

  constructor(private store: Store<SearchState>) {}

  ngOnInit() {
    this.films$ = this.store.select(fromStore.getFilteredFilms);
  }

  // TODO: when user suche eintippt, und router ändert, nachher wieder filter einstellen

  onKey(val: string) {
    this.store.dispatch(new fromStore.SetFilmFilter(val));
  }
}
