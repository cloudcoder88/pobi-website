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

     {
      id:9,
      name:'MB Gold Creatine Monohydrate 300g',
      price:55000,
      rating:4,
      image:'assets/images/creatine.jpeg',
      description:'Muscle Builder Gold Creatine Monohydrate is a premium-grade creatine powder designed to enhance athletic performance, increase muscle mass, and accelerate recovery'
     },

     {
      id:10,
      name:'Prequel Skin Multi-Acid Milk AHA Peel',
      price:48000,
      rating:5,
      image:'assets/images/milk AHA peel.jpeg',
      description:'Prequel Skin Multi-Acid Milk AHA Peel is a dermatologist-formulated, milky resurfacing treatment that delivers advanced exfoliation without compromising your skin barrier'
     },

  
        {
      id:11,
      name:'Anua Azelaic 10 Hyaluron Redness Soothing Pad',
      price:26000,
      rating:4,
      image:'https://anua.global/cdn/shop/files/anua-us-toner-90-ea-azelaic-10-hyaluron-redness-soothing-pad-1170826118.png?v=1748645013&width=1000',
      description:'This toner pad is suitable for sensitive skin, formulated with soothing and hydrating ingredients that help improve the appearance of redness and visibly troubled areas.'
     },

        {
      id:12,
      name:'La Roche-Posay Toleriane Hydrating Gentle Cleanser 200ml',
      price:31000,
      rating:5,
      image:'https://essentialshub.com/wp-content/uploads/2023/11/IMG_4175.webp',
      description:' Toleriane Hydrating Gentle Cleanser is a daily face wash for normal to dry, sensitive skin.'
     },

        {
      id:13,
      name:'Phlur Mrs Smith Hair & Body Fragrance Mist 90ml',
      price:49000,
      rating:5,
      image:'https://essentialshub.com/wp-content/uploads/2025/09/IMG_3751.jpeg',
      description:'A luxurious hair and body mist that envelops you in a warm, inviting scent.'
     },

        {
      id:14,
      name:'Romano Force Romano Body Spray',
      price:7000,
      rating:4,
      image:'https://romanoformen.com/media/cznfoh1w/force-bodyspray-150.png',
      description:'Provides long-lasting fragrance to keep the body refreshed and comfortable.'
     },

        {
      id:15,
      name:'CosRx The Alpha Arbutin Discoloration Care Hydrogel Sheet Mask',
      price:7000,
      rating:5,
      image:'https://beautybydaz.com/wp-content/uploads/2025/08/cosrx-srbutin-sheet-1.jpg',
      description:'it helps reduce the appearance of blemishes and hyperpigmentation, revealing a clearer, more even-toned, and radiant complexion'
     },

     {
      id:16,
      name:'Necessaire The Conditioner 250ml',
      price:58000,
      rating:5,
      image:'https://essentialshub.com/wp-content/uploads/2025/09/imgi_25_s2608727-main-zoom.jpg',
      description:'The Conditioner is a daily conditioning treatment for scalp and hair'

     },

     {
      id:17,
      name:'Foamie Shampoo Bar – Raspberry for Coloured Hair',
      price:7800,
      rating:4,
      image:'https://essentialshub.com/wp-content/uploads/2023/11/Foamie-Shampoo-Bar-Raspberry-for-Coloured-Hair.jpg',
      description:'Foamie Shampoo Bar – Raspberry for Coloured Hair is a solid shampoo bar designed to gently cleanse and nourish colored hair.'
     },

     {
      id:18,
      name:'',
      price:4,
      rating:4,
      image:'',
      description:''
     },

     {
      id:19,
      name:'',
      price:2,
      rating:4,
      image:'',
      description:''
     },
     
     {
      id:20,
      name:'',
      price:1,
      rating:3,
      image:'',
      description:'',
     },

     {
      id:21,
      name:'',
      price:2,
      rating:4,
      image:'',
      description:'',
     },

     {
      id:22,
      name:'',
      price:2,
      rating:3,
      image:'',
      description:'',
     },

     {
      id:23,
      name:'',
      price:2,
      rating:2,
      image:'',
      description:'',
     },

     {
      id:24,
      name:'',
      price:3,
      rating:3,
      image:'',
      description:'',
     },

     {
      id:25,
      name:'',
      price:3,
      rating:3,
      image:'',
      description:'',
     }
 ]};

  