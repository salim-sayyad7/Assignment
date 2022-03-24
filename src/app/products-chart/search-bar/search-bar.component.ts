import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  

  constructor(private router : Router) { }
  
  ngOnInit(): void {
  }
 myfunct(){
   console.log("clicke1d");
   this.router.navigateByUrl("/filter");
 }

  
}
