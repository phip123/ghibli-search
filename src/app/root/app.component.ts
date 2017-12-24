import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {
  ActivatedRoute, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router,
  RouterEvent
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  loading = false;

  public sidenavLinks = [
    {name: 'Home', link: '/search'},
    {name: 'Movies', link: '/search/movies'},
    {name: 'People', link: '/search/people'},
    {name: 'Locations', link: '/search/locations'},
    {name: 'Species', link: '/search/species'},
    {name: 'About', link: '/about'}
  ];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit(): void {
    /*this.router.events.pipe(
      filter((event) => event instanceof ActivationStart),
      take(1),
      tap(() => {
        console.log('he');
        this.loading = false;
      })
    );

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      take(1),
      tap(() => {
        console.log('he2');
        this.loading = true;
      })
    );*/
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof GuardsCheckStart) {
      this.loading = true;
    }

    if (event instanceof GuardsCheckEnd) {
      this.loading = true;
    }

    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
