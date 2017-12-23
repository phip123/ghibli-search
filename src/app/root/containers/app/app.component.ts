import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  public sidenavLinks = [
    {name: 'Home', link: '/search'},
    {name: 'Movies', link: '/search/movies'},
    {name: 'People', link: '/search/people'},
    {name: 'Locations', link: '/search/locations'},
    {name: 'Species', link: '/search/species'},
    {name: 'About', link: '/about'}
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
