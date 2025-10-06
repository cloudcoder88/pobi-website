import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: any[] = [];
  total = 0;

  // 🔹 Add your WhatsApp number here
  whatsappNumber: string = '2349012345678'; // Replace with your business number (no "+" sign)

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  checkoutViaWhatsApp() {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const message = this.cartItems
      .map(item => `🛍️ ${item.name} - ₦${item.price}`)
      .join('%0A');

    const totalMessage = `%0A💰 *Total:* ₦${this.total}`;
    const finalMessage = `Hello! I'm interested in purchasing the following items:%0A${message}${totalMessage}`;
    const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${finalMessage}`;

    window.open(whatsappURL, '_blank');
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
    this.total = 0;
  }
}
