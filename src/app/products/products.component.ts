import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { CartService } from '../services/cart.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,       
    RatingModule,       
    PaginatorModule,
    MatCardModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Hydrating Face Cream', price: 7500, rating: 4, image: 'assets/images/cream.jpg',description:'A deeply hydrating face cream that provides long-lasting moisture.' },
    { name: 'Vitamin C Serum', price: 12000, rating: 5, image: 'assets/images/serum.jpg',description:'A brightening serum that helps to even skin tone and reduce signs of aging.' },
    { name: 'Cerave Foaming Facial Cleanser', price: 28000, rating: 5, image: 'assets/images/serum.jpg',description:'A gentle foaming cleanser that removes dirt and makeup without stripping the skin.' },
    { name: 'Solano Hand Sanitizer', price: 7500, rating: 5, image: 'assets/images/serum.jpg',description:'An effective hand sanitizer that kills 99.9% of germs.' },
    { name: 'Kirkland Minoxidil For Hair', price: 9000, rating: 5, image: 'assets/images/minoxidil.jpg',description:'A topical solution for hair regrowth in men.' },
    { name: 'Kirkland Minoxidil + Dermaroller', price: 9400, rating: 5, image: 'assets/images/minoxidil.jpg',description:'A complete hair regrowth kit with minoxidil and a dermaroller.' },
    { name: 'Miracle Compression Socks', price: 9400, rating: 4, image: 'assets/images/socks.jpeg',description:'Compression socks designed to improve circulation and reduce fatigue.' },
    { name: 'Puritans Pride Zinc', price: 16000, rating: 4, image: 'assets/images/zinc.jpeg',description:'Zinc supplements to support immune health and overall wellness.' }
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