import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProductAddComponent },
  { path: '**', redirectTo: '' } // wildcard
];