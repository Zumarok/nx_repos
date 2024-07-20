import { Component } from '@angular/core';
import { SharedUiComponent } from '@angular-monorepo/shared-ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
