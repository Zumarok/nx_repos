import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, ExtraOptions } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { StarterPageComponent } from './pages/starter-page/starter-page.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: IndexPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'portfolio-details',
        component: PortfolioDetailsComponent,
      },
      {
        path: 'service-details',
        component: ServiceDetailsComponent,
      },
      {
        path: 'starter-page',
        component: StarterPageComponent,
      },
      {
        path: 'products',
        loadComponent: () =>
          import('@angular-monorepo/products').then((m) => m.ProductsComponent),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('@angular-monorepo/orders').then((m) => m.OrdersComponent),
      },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] // Adjust the offset as needed
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { 
    preloadingStrategy: PreloadAllModules, 
    ...routerOptions 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }