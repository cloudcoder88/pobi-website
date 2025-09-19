import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private cartService: CartService) {}

  products = [
    { name: 'Hydrating Face Cream', price: 7500, rating: 4, image: 'assets/images/cream.jpg' },
    { name: 'Vitamin C Serum', price: 12000, rating: 5, image: 'assets/images/serum.jpg' },
    { name: 'Cerave Foaming Facial Cleanser', price: 28000, rating: 5, image: 'assets/images/serum.jpg' },
    { name: 'Solano Hand Sanitizer for Killing Germs', price: 7500, rating: 5, image: 'assets/images/serum.jpg' },
    { name: 'Kirkland Minoxidil For Hair And Beard Growth Treatment X1', price: 9000, rating: 5, image: 'assets/images/minoxidil.jpg' },
    { name: 'Kirkland Minoxidil 5% + Dermaroller Beard / Hair Growth Kit', price: 9400, rating: 5, image: 'assets/images/minoxidil.jpg' },
    { name: 'Miracle Anti-Fatigue Compression Socks - Unisex', price: 9400, rating: 4, image: 'assets/images/socks.jpeg' },
    { name: 'Puritans Pride Zinc for Acne', price: 16000, rating: 4, image: 'assets/images/zinc.jpeg' },
    { name:'MB Gold Creatine Monohydrate 300g',price:55000,rating:5,image:'assets/images/zinc.jpeg'}
  ];

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
