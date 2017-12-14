import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  @Input('films')
  films: Film[];

  constructor() { }

  ngOnInit() {
  }

}
