import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Species} from '@app/core/models/species.model';

@Component({
  selector: 'app-species-search',
  templateUrl: './species-search.component.html',
  styleUrls: ['./species-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesSearchComponent implements OnInit {

  species$: Observable<Species[]>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.species$ = this.store.select(fromStore.getFilteredSpecies);
  }


  onKey(val: string) {
    this.store.dispatch(new fromStore.SetSpeciesFilter(val));
  }
}

