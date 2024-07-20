import { Component } from '@angular/core';
import { SharedUiComponent } from '@angular-monorepo/shared-ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-orders',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
