import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Film} from '@app/core/models/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit {

  @Input('films')
  films: Film[];

  constructor() { }

  ngOnInit() {
  }

}
