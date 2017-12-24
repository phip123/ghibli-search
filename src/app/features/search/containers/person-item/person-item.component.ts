import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '@app/core/models/person.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Species} from '@app/core/models/species.model';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonItemComponent implements OnInit {

  person$: Observable<Person>;
  species$: Observable<Species>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.species$ = this.store.select(fromStore.getSpeciesForPerson);
    this.person$ = this.store.select(fromStore.getSelectedPerson).pipe(
      tap((person: Person) => {
        if (person && person.id) {
          this.store.dispatch(new fromStore.LoadSpeciesForPerson(person.id));
        }
      })
    );
  }

}
