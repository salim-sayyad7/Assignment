import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    ProductTableComponent
  ],
  exports:[
    SearchBarComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsChartModule { }
