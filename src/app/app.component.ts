import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// PrimeNG Sidebar
import { SidebarModule } from 'primeng/sidebar';

// Import AOS animation library
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skincare-project';
  sidebarVisible: boolean = false;

  // Initialize AOS after app loads
  ngOnInit(): void {
    AOS.init({
      duration: 1000,     // smooth animation timing
      easing: 'ease-in-out',
      once: true,         // only animate once per scroll
      mirror: false       // don’t reanimate when scrolling back up
    });
  }
}
