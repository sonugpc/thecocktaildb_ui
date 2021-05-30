import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery:String="";
  selected:any="name"
  constructor(public router: Router,
    public _api:ApiserviceService,
    public com:CommonService) { }

  ngOnInit(): void {
  }


  onSearch(form:any){
    
    let pageType=form.value.category;
    console.log(form.value)
    let query = form.value.search;
    if(pageType=="name")
    this.com.routeToPath("/search/names",query);
    else if(pageType=="category")
    this.com.routeToPath("/search/category",query);
    else
    this.com.routeToPath("/search/ingredients",query);


  }
}
