import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Sarah A.',
      image: 'assets/reviews/review1.png',
      text: 'This product completely transformed my skin! So smooth and glowing now.'
    },
    {
      name: 'James O.',
      image: 'assets/reviews/review2.png',
      text: 'Fast delivery and excellent quality. I’ll definitely buy again!'
    },
    {
      name: 'Amaka K.',
      image: 'assets/reviews/review3.png',
      text: 'I was skeptical, but it worked perfectly for my dry skin.'
    },
    {
      name: 'David L.',
      image: 'assets/reviews/review4.png',
      text: 'Affordable and effective — better than most expensive brands.'
    },
    {
      name: 'Nneka I.',
      image: 'assets/reviews/review5.png',
      text: 'Highly recommend! My skin feels amazing every morning.'
    }
  ];
}
