import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '@app/features/search/store';
import {SearchState} from '@app/features/search/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Location} from '@app/core/models/location.model';

@Component({
  selector: 'app-locations-search',
  templateUrl: './locations-search.component.html',
  styleUrls: ['./locations-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsSearchComponent implements OnInit {

  locations$: Observable<Location[]>;

  constructor(private store: Store<SearchState>) {
  }

  ngOnInit() {
    this.locations$ = this.store.select(fromStore.getFilteredLocations);
  }

  onKey(val: string) {
    this.store.dispatch(new fromStore.SetLocationsFilter(val));
  }


}
