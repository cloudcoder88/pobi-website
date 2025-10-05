

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Cart:', this.cart);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  generateWhatsAppMessage(): string {
    if (this.cart.length === 0) {
      return 'Hello, I’m interested in buying some items from your store.';
    }

    let message = 'Hello, I’m interested in purchasing the following items:%0A%0A';
    this.cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₦${item.price.toLocaleString()}%0A`;
    });

    message += `%0ATotal: ₦${this.getTotalPrice().toLocaleString()}%0A%0AThank you!`;
    return message;
  }
}
