import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Film} from '@app/core/models/film.model';
import {Person} from '@app/core/models/person.model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailComponent implements OnInit {

  @Input('film')
  film: Film;

  @Input('people')
  people: Person[];

  @Input('peopleLoading')
  peopleLoading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
