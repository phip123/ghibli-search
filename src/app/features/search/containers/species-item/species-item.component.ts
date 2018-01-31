import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Species} from '@app/core/models/species.model';
import {Person} from '@app/core/models/person.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-species-item',
  templateUrl: './species-item.component.html',
  styleUrls: ['./species-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesItemComponent implements OnInit {

  species$: Observable<Species>;
  people$: Observable<Person[]>;
  peopleLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.people$ = this.store.select(fromStore.getPeopleForSpecies);
    this.peopleLoading$ = this.store.select(fromStore.getPeopleForSpeciesLoading);
    this.species$ = this.store.select(fromStore.getSelectedSpecies).pipe(
      tap((species: Species) => {
        if (species && species.id) {
          this.store.dispatch(new fromStore.LoadPeopleForSpecies(species.id));
        }
      })
    );

  }

}
