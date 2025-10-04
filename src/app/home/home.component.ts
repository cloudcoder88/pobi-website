import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      strings: [
        "Glow with Confidence ✨",
        "Nourish Your Skin 💧",
        "Be Your Radiant Self 🌸"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }
}
