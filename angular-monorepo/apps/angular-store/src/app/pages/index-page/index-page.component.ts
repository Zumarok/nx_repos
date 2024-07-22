import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule to imports
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexPageComponent implements AfterViewInit, OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setAttribute(document.body, 'class', 'index-page');
    
    // Change the class of the header element
    const header = document.getElementById('header');
    if (header) {
        this.renderer.removeClass(header, 'position-relative');
        this.renderer.addClass(header, 'fixed-top');
    }
  }

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
      const swiperParams = {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120
          }
        }
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }
}