import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryRowComponent } from './product-category-row/product-category-row.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductsChartModule } from '../products-chart.module';



@NgModule({
  declarations: [
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  exports:[
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  imports: [
    CommonModule,
    ProductsChartModule
  ]
})
export class CatagoryModule { }
