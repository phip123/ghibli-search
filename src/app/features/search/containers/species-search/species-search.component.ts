import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-species-search',
  templateUrl: './species-search.component.html',
  styleUrls: ['./species-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
