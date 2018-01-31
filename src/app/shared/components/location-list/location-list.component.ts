import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Location} from '@app/core/models/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent implements OnInit {


  @Input('locations')
  locations: Location[];

  constructor() {
  }

  ngOnInit() {
  }

}
