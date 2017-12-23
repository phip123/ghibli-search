import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '@app/core/models/person.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';


@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent implements OnInit {

  person$: Observable<Person>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.person$ = this.store.select(fromStore.getSelectedPerson);
  }

}
