import { Component, OnInit } from '@angular/core';
import { ProductCategoryServiceService } from '../products-chart/catagory/product-category-row/product-category-service.service';
import { TotalItemsServiceService } from '../products-chart/catagory/total-items-service.service';
@Component({
  selector: 'app-filterable-product-table',
  templateUrl: './filterable-product-table.component.html',
  styleUrls: ['./filterable-product-table.component.css']
})
export class FilterableProductTableComponent implements OnInit {
  totalSportings1: any;
  totalElectronics1: any;
  productCategories: any;

  constructor(private _TotalItemsServiceService1:TotalItemsServiceService,private _ProductCategoryServiceService1:ProductCategoryServiceService) { }

  ngOnInit(): void {
    this.totalSportings1 = this._TotalItemsServiceService1.getItems("Sporting Goods");  
    this.totalElectronics1 = this._TotalItemsServiceService1.getItems("Electronics");
    this.productCategories = this._ProductCategoryServiceService1.getProductCategory();    

  }

}
