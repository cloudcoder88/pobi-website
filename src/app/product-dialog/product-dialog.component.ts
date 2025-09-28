import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, RatingModule,], 
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
