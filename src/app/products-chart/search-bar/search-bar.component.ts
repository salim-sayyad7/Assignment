import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  
  constructor() { }
  router: RouterLink ;
  ngOnInit(): void {
  }
 myfunct(){
   this.router.RouterLink = "/filter";
 }

  
}
