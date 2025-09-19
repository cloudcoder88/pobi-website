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
    {
      id:3,
      name:'Cerave Foaming Facial cleanser',
      price:28000,
      rating:5,
      image:'assets/images/serum.jpg',
      description:'CeraVe Foaming Facial Cleanser features ceramides, hyaluronic acid, and niacinamide, and is formulated to help to maintain your skin protective barrier, lock in moisture, and calm your skin.'
    },

    {
      id:4,
      name:'solano hand sanitizer for killing germs',
      price:7500,
      rating:5,
      image:'assets/images/serum.jpg',
      description:'',
    },

    {
      id:5,
      name:'Kirkland Minoxidil For Hair And Beard growth Treatment X1',
      price:9000,
      rating:5,
      image:'assets/images/serum.jpg',
      description:'Minoxidil 5% is a topical solution formula that works to boost hair follicles activity and hair protein production'
    },

    { 
     id:6,
     name:'Kirkland Minoxidil 5% + Dermaroller Beard / Hair Growth Kit',
     price: 9800,
     rating:5,
     image:'assets/images/Minoxidill.jpg',
     description:'This Minoxidil 5% kit comes with a derma roller which has fine  micro needles that create hundreds of tiny micro punctures on the skin that stimulate hair follicles.'
    },

    {
      id:7,
      name:'Miracle Anti-Fatigue Compression Socks - Unisex',
      price:9400,
      rating:5,
      image:'assets/images/socks.jpeg',
      description:'Miracle Socks are a new anti-fatigue compression sock that boosts circulation, reduces aches and swelling while looking like traditional socks'
     },

     {
      id:8,
      name:'Puritans Pride Zinc for Acne',
      price:16000,
      rating:4,
      image:'assets/iamges/zinc.jpeg',
      description:'It  provide a combination of nutrients including zinc and Vitamins C, B-6, A, and E, specially blended for your skin.'
     },
     
 ]};

  