import { Component, OnInit } from '@angular/core';
import {SearchState} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromStore from '../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films$: Observable<Film[]>;

  constructor(private store: Store<SearchState>) { }

  ngOnInit() {
    this.films$ = this.store.select(fromStore.getAllFilms);
    this.store.dispatch(new fromStore.LoadFilms());
  }

}
