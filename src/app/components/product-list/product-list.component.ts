import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';  // ← Add this

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
    private router: Router,  // ← Add Router
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


  editProduct(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteProduct(id: number, name: string): void {
    if (confirm(`Voulez-vous vraiment supprimer "${name}" ?`)) {
      this.productService.deleteProduct(id).subscribe({
        next: () => this.loadProducts(),
        error: () => alert('Erreur lors de la suppression')
      });
    }
  }
  
}