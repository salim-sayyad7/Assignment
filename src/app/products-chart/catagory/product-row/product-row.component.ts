import { Component, OnInit } from '@angular/core';
import { TotalItemsServiceService } from '../total-items-service.service';
import { ProductCategoryServiceService } from '../product-category-row/product-category-service.service';
import { SearchBarComponent } from '../../search-bar/search-bar.component';


@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  productCategories: any;

  constructor(private _TotalItemsServiceService:TotalItemsServiceService,private _ProductCategoryServiceService:ProductCategoryServiceService) { }

  totalSportings: any;
  totalElectronics: any ;
 


  ngOnInit(): void {
    this.totalSportings = this._TotalItemsServiceService.getItems("Sporting Goods");  
    this.totalElectronics = this._TotalItemsServiceService.getItems("Electronics");
    this.productCategories = this._ProductCategoryServiceService.getProductCategory();    
  }

}
