import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule, RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarVisible: boolean = true;
  collapsed: boolean = false;

  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
    { label: 'Products', icon: 'pi pi-shopping-bag', routerLink: '/products' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
