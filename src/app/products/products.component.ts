import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: {
  name: string;
  price: number;
  rating: number;
  image: string;
}[] = [
  {
    name: 'Hydrating Face Cream',
    price: 7500,
    rating: 4,
    image: 'assets/images/cream.jpg'
  },
  {
    name: 'Vitamin C Serum',
    price: 12000,
    rating: 5,
    image: 'assets/images/serum.jpg'
  },

   {
    name: '',
    price:5000,
    rating:5,
    image:'assets/images/serum.jpg'
   },

   {
    name:'',
    price:7500,
    rating:5,
    image:'assets/images/serum.jpg'
   },
   
];}
