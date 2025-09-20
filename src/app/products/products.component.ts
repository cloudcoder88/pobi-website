import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,       
    RatingModule,       
    PaginatorModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Hydrating Face Cream', price: 7500, rating: 4, image: 'assets/images/cream.jpg' },
    { name: 'Vitamin C Serum', price: 12000, rating: 5, image: 'assets/images/serum.jpg' },
    { name: 'Cerave Foaming Facial Cleanser', price: 28000, rating: 5, image: 'assets/images/serum.jpg' },
    { name: 'Solano Hand Sanitizer', price: 7500, rating: 5, image: 'assets/images/serum.jpg' },
    { name: 'Kirkland Minoxidil For Hair', price: 9000, rating: 5, image: 'assets/images/minoxidil.jpg' },
    { name: 'Kirkland Minoxidil + Dermaroller', price: 9400, rating: 5, image: 'assets/images/minoxidil.jpg' },
    { name: 'Miracle Compression Socks', price: 9400, rating: 4, image: 'assets/images/socks.jpeg' },
    { name: 'Puritans Pride Zinc', price: 16000, rating: 4, image: 'assets/images/zinc.jpeg' }
  ];

  first: number = 0;
  rows: number = 4;

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}