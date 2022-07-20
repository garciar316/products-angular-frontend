import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() {}

  ngOnInit(): void {}

  generateRandom(): string {
    return `https://picsum.photos/id/${ Math.floor((Math.random() * (100 - 1 + 1)) + 1) }/200`;
  }
}
