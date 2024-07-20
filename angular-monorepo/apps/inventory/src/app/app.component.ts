import { Component } from '@angular/core';
import { ProductsComponent } from '@angular-monorepo/products';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ProductsComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
