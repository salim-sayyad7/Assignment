import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterableProductTableComponent } from './filterable-product-table/filterable-product-table.component';
import { CatagoryModule } from './products-chart/catagory/catagory.module';
import { ProductsChartModule } from './products-chart/products-chart.module';
import { TotalItemsServiceService } from './products-chart/catagory/total-items-service.service';
import { ProductCategoryServiceService } from './products-chart/catagory/product-category-row/product-category-service.service';
import { routingComponent } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterableProductTableComponent,
    routingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatagoryModule,
    ProductsChartModule

  ],
  providers: [TotalItemsServiceService , ProductCategoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
