import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { CartService } from '../services/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,       
    RatingModule,       
    PaginatorModule,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Hydrating Face Cream', price: 7500, rating: 4, image: 'https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/moisturizers/pm-facial-moisturizing-lotion/pm-facial-lotion-front-li-badge.jpg?rev=487173c48616428cab2ca4152c9876a0&w=900&hash=32A840D59358EB117F4D95C65F06B375', description:'A deeply hydrating face cream that provides long-lasting moisture.' },
    { name: 'Vitamin C Serum', price: 12000, rating: 5, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/6816814/1.jpg?8107', description:'A brightening serum that helps to even skin tone and reduce signs of aging.' },
    { name: 'Cerave Foaming Facial Cleanser', price: 28000, rating: 5, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/0809193/1.jpg?2663', description:'A gentle foaming cleanser that removes dirt and makeup without stripping the skin.' },
    { name: 'Solano Hand Sanitizer', price: 7500, rating: 5, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/6934404/1.jpg?6213', description:'An effective hand sanitizer that kills 99.9% of germs.' },
    { name: 'Kirkland Minoxidil For Hair', price: 9000, rating: 5, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/6829483/1.jpg?1317', description:'A topical solution for hair regrowth in men.' },
    { name: 'Kirkland Minoxidil + Dermaroller', price: 9400, rating: 5, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/9336814/1.jpg?5468', description:'A complete hair regrowth kit with minoxidil and a dermaroller.' },
    { name: 'Miracle Compression Socks', price: 9400, rating: 4, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/4955732/1.jpg?0668', description:'Compression socks designed to improve circulation and reduce fatigue.' },
    { name: 'Puritans Pride Zinc', price: 16000, rating: 4, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/4595311/1.jpg?2492', description:'Zinc supplements to support immune health and overall wellness.' }
  ];

  first: number = 0;
  rows: number = 4;

  constructor(private cartService: CartService, private dialog: MatDialog) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  openDialog(product: any) {
    this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: product
    });
  }
}
