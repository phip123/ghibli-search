import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '@app/features/search/store';
import {SearchState} from '@app/features/search/store/reducers';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Person} from '@app/core/models/person.model';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleSearchComponent implements OnInit {

  people$: Observable<Person[]>;

  constructor(private store: Store<SearchState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadPersons());
    this.people$ = this.store.select(fromStore.getFilteredPeople);
  }

  // TODO: when user suche eintippt, und router ändert, nachher wieder filter einstellen

  onKey(val: string) {
    this.store.dispatch(new fromStore.SetPeopleFilter(val));
  }

}
