import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductComponent } from './components/product/product.component';
import { NgZorroModule } from '../ng-zorro/ng-zorro.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    SharedModule
  ],
  exports: [ListProductsComponent]
})
export class ProductsModule { }
