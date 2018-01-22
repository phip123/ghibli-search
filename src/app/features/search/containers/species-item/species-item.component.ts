import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Species} from '@app/core/models/species.model';

@Component({
  selector: 'app-species-item',
  templateUrl: './species-item.component.html',
  styleUrls: ['./species-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesItemComponent implements OnInit {

  species$: Observable<Species>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.species$ = this.store.select(fromStore.getSelectedSpecies);
  }

}
