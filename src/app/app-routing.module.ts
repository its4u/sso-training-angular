import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';
import { AppAuthGuard } from './app-auth-guard';

const routes: Routes = [
      { 
        path: '',
        component: ProductListComponent,
        canActivate: [AppAuthGuard],
        data: {
          roles: ['Listing_Product']
        }
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
