import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product = {
    name: '',
    price: 0,
    quantity: 0,
    category: ''
  };

  submitted = false;

  constructor(
    private productService: ProductService,
    public router: Router
  ) {}

  addProduct() {
    if (!this.product.name || this.product.price <= 0 || this.product.quantity < 0) {
      alert('Veuillez remplir tous les champs correctement');
      return;
    }

    this.productService.addProduct(this.product).subscribe({
      next: (newProduct) => {
        this.submitted = true;
        setTimeout(() => {
          // Revenir à la liste après succès
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’ajout du produit');
      }
    });
  }
}