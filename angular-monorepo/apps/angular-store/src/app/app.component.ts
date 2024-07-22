import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'angular-store';

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.display = 'block';
        }
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.display = 'none';
        }
      }

      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
}