import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../services/cart.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { Router, RouterModule} from '@angular/router';
 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    PaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
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
    { name: 'Puritans Pride Zinc', price: 16000, rating: 4, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/4595311/1.jpg?2492', description:'Zinc supplements to support immune health and overall wellness.' },
    { name:'MB Gold Creatine Monohydrate 300g',price:55000,rating:4,image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/8881704/1.jpg?3486',description:'Muscle Builder Gold Creatine Monohydrate is a premium-grade creatine powder designed to enhance athletic performance, increase muscle mass, and accelerate recovery'},
    { name:'Prequel Skin Multi-Acid Milk AHA Peel',price:48000,rating:5,image:'https://prequelskin.com/cdn/shop/files/1-PRQL_PDP_Product_Multi-AcidMilk_072025_CapOn.jpg?v=1753227404&width=3000',description:'Prequel Skin Multi-Acid Milk AHA Peel is a dermatologist-formulated, milky resurfacing treatment that delivers advanced exfoliation without compromising your skin barrier'},
    { name:'La Roche-Posay Toleriane Hydrating Gentle Cleanser 200ml', price:31000,rating:5, image:'https://essentialshub.com/wp-content/uploads/2023/11/IMG_4175.webp', description:'Toleriane Hydrating Gentle Cleanser is a daily face wash for normal to dry, sensitive skin.'},
    { name:'Anua Azelaic 10 Hyaluron Redness Soothing Pad', price:26000,rating:5,image:'https://anua.global/cdn/shop/files/anua-us-toner-90-ea-azelaic-10-hyaluron-redness-soothing-pad-1170826118.png?v=1748645013&width=1000',description:'This toner pad is suitable for sensitive skin, formulated with soothing and hydrating ingredients that help improve the appearance of redness and visibly troubled areas.'},
    { name:'Necessaire The Conditioner 250ml',price:58000, rating:5,image:'https://essentialshub.com/wp-content/uploads/2025/09/imgi_25_s2608727-main-zoom.jpg',description:'The Conditioner is a daily conditioning treatment for scalp and hair'},
    { name:'Foamie Shampoo Bar – Raspberry for Coloured Hair',price:7800,rating:4,image:'https://essentialshub.com/wp-content/uploads/2023/11/Foamie-Shampoo-Bar-Raspberry-for-Coloured-Hair.jpg',description:'Foamie Shampoo Bar – Raspberry for Coloured Hair is a solid shampoo bar designed to gently cleanse and nourish colored hair.'},
    { name:'CosRx the Alpha Arbutin Discoloration Care Hydrogen Sheet Mask', price:7000,rating:5,image:'https://beautybydaz.com/wp-content/uploads/2025/08/cosrx-srbutin-sheet-1.jpg',description:'It helps reduce the appearance of blemishes and hyperpigmentation, revealing a clearer, more even-toned, and radiant complexion.'},
    { name:'Dove Exfoliating Body Scrub Kiwi Seeds & Cool Aloe Scent ',price:19000,rating:5,image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/1657814/1.jpg?2707',description:'Dove Exfoliating Body Scrub Kiwi Seeds & Cool Aloe Scent is a body scrub that gently exfoliates and nourishes the skin, leaving it soft and refreshed.'},
    { name:'Vaseline BlueSeal Baby Gentle Protective Jelly',price:'4500',rating:'4',image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/6531914/1.jpg?4762',description:'Vaseline®Petroleum Jelly Baby soothes nappy rash and chafing and restores soft skin'},
    {name:'NIVEA Sun UV Sunscreen Face Shine Control Cream SPF 50',price:16000,rating:4,image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/4808404/3.jpg?5554',description:'NIVEA Sun UV Sunscreen Face Shine Control Cream SPF 50- 50ML is a Lightweight,non-greasy sunscreen that provides high protection against UVA and UVB rays, helping to prevent sunburn and premature skin aging.'},
    {name:'Q+A Retinol Facial Serum 30ml',price:13000,rating:5,image:'https://teeka4.com/wp-content/uploads/2025/10/WhatsApp-Image-2024-02-13-at-11.35.38_6d0ef3f4-1024x1024.jpg',description:'This retinol serum is suitable for oily, dry, normal, and combination skin types,and it helps to reduce the apppearance of fine lines,wrinkles,and uneven skin tone,while promoting a smoother and more youthful complexion.'},



  ];

  first: number = 0;
  rows: number = 6;

  constructor(public CartService: CartService, private dialog: MatDialog,private router: Router) {
    this.setRowsBasedOnScreen();
  }

  /** Adjust how many products show per page */
  @HostListener('window:resize', [])
  onResize() {
    this.setRowsBasedOnScreen();
  }

  setRowsBasedOnScreen() {
    if (window.innerWidth >= 992) {
      this.rows = 8; // desktop → 4×2 grid
    } else {
      this.rows = 6; // mobile/tablet → 2×3 grid
    }
  }

  /** Add selected product to cart */
  addToCart(product: any) {
    this.CartService.addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  }

  /** Paginator logic */
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }


  /** check out logic */

 

   goToCheckout(event: Event) {
    event.stopPropagation(); // prevent accidental product clicks
    this.router.navigate(['/checkout']); // correct route to checkout page
   }



  /** Open modal with product details */
  openDialog(product: any) {
    this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: product
    });
  }
}
