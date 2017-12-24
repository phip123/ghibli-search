import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-locations-search',
  templateUrl: './locations-search.component.html',
  styleUrls: ['./locations-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
