import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Hydrating Face Cream',
      price: 7500,
      rating: 4,
      image: 'assets/images/cream.jpg',
      description: 'A deeply moisturizing cream for daily skincare.'
    },
    {
      id: 2,
      name: 'Vitamin C Serum',
      price: 12000,
      rating: 5,
      image: 'assets/images/serum.jpg',
      description: 'Brightens skin tone and reduces dark spots.'
    },
];    


  