import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.scss']
})
export class SearchDashboardComponent implements OnInit {

  public criterias = [
    { name: 'Movies', link: 'movies' },
    { name: 'People', link: 'people' },
    { name: 'Locations', link: 'locations' },
    { name: 'Species', link: 'species' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
