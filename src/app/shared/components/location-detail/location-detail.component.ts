import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@app/core/models/location.model';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  @Input('location')
  location: Location;

  constructor() {
  }

  ngOnInit() {
  }

}
