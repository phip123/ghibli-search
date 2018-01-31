import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Location} from '@app/core/models/location.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.scss']
})
export class LocationItemComponent implements OnInit {

  location$: Observable<Location>;

  constructor(private store: Store<fromStore.SearchState>) {
  }

  ngOnInit() {
    this.location$ = this.store.select(fromStore.getSelectedLocation);
  }

}
