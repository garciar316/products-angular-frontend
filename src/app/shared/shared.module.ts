import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule, NgxPaginationModule]
})
export class SharedModule { }
