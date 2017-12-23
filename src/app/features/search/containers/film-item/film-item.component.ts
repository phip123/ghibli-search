import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {Film} from '@app/core/models/film.model';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  film$: Observable<Film>;

  constructor(private store: Store<fromStore.SearchState>) { }

  ngOnInit() {
    this.film$ = this.store.select(fromStore.getSelectedFilm).pipe(
      tap((film: Film) => {
        //TODO dispatch actions to load people, etc.
      })
    );
    //TODO select location, people etc.
  }

}
