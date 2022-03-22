import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterableProductTableComponent } from './filterable-product-table/filterable-product-table.component';
import { ProductRowComponent } from './products-chart/catagory/product-row/product-row.component';

const routes: Routes = [
  {path: '', component:ProductRowComponent},
  {path: 'filter', component:FilterableProductTableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AppComponent , FilterableProductTableComponent]