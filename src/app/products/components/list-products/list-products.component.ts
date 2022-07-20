import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass'],
})
export class ListProductsComponent implements OnInit {
  products!: IProduct[];
  p: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): any {
    this.productService.getProducts().subscribe({
      next: (value) => (this.products = value),
      error: (err) => console.error(err),
    });
  }
}
