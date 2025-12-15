import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = { id: 0, name: '', price: 0, quantity: 0, category: '' };
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (data) => this.product = { ...data },
      error: () => this.router.navigate(['/'])
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe({
      next: () => {
        this.submitted = true;
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: () => alert('Erreur lors de la modification')
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}