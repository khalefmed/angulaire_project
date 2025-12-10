import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      console.log("Données chargées :", data);

      this.products = data;
      this.filteredProducts = [...data];

      this.cdr.detectChanges();   // 👈 IMPORTANT
    });
  }

  searchProducts(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    }
  }
}