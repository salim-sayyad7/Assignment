import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryServiceService {

  constructor() { }
  getProductCategory(){
    return [ "Sporting Goods","Electronics"]
  }
}
