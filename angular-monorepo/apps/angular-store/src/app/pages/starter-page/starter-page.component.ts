import { Component, CUSTOM_ELEMENTS_SCHEMA,  OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-starter-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './starter-page.component.html',
  styleUrl: './starter-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StarterPageComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setAttribute(document.body, 'class', 'starter-page');

    window.scrollTo(0, 0); // Ensure the page scrolls to the top on initialization
    
    // Change the class of the header element
    const header = document.getElementById('header');
    if (header) {
        this.renderer.removeClass(header, 'fixed-top');
        this.renderer.addClass(header, 'position-relative');
    }
  }
}
