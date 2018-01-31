import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Location} from '@app/core/models/location.model';
import {Person} from '@app/core/models/person.model';
import {Film} from '@app/core/models/film.model';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDetailComponent implements OnInit {

  @Input('location')
  location: Location;

  @Input('people')
  people: Person[];

  @Input('films')
  films: Film[];

  @Input('peopleLoading')
  peopleLoading: boolean;

  @Input('filmsLoading')
  filmsLoading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
