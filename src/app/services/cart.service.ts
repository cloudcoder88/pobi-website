import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Added to cart:', product);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  generateWhatsAppMessage(): string {
    if (this.cart.length === 0) return encodeURIComponent('My cart is empty.');
    
    let message = 'Hello, I am interested in purchasing the following items:%0A%0A';
    this.cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₦${item.price}%0A`;
    });
    message += `%0ATotal: ₦${this.getTotalPrice()}%0A%0AThank you!`;
    
    return encodeURIComponent(message);
  }
}
