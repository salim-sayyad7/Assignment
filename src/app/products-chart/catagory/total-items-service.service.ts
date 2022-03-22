import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalItemsServiceService {

  constructor() { }
  getItems(val:string){  
    if (val == "Sporting Goods"){
      return [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      ];
    }
    else {
    return [
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
  }
  }
}
