import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <main>
      <app-product-list></app-product-list>
    </main>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'product-management';
}