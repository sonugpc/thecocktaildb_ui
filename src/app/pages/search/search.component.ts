import { CommonService } from './../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery:any="";
  showFilter:boolean=false;
  resultData:any=[];
  activatedTail:any={};
  sideImage:any="assets/ck.svg"
  isLoading: boolean=false;
  filterQuery:any;
  pageType:any="name"
  options: AnimationOptions = {
    path: '/assets/load.json',
  };
  backupData: any[]=[];
  modalLoading: boolean=false;;
  constructor(public router: ActivatedRoute,
    public _api:ApiserviceService,
    public com:CommonService,
    public modal:MatDialog) { 
   this.router.data.subscribe(e=>{
        this.sideImage=e.image;
        this.pageType=e.type;
      })
    this.searchQuery= this.router.snapshot.paramMap.get("q");
    if(this.searchQuery!=""){
      this.onSearch();
    }
  }

  ngOnInit(): void {
  }
  onSearch(){
    this.isLoading = true;
    if(this.pageType=="name"){
      this._api.getSearchResults(this.searchQuery).then((res:any)=>{
console.log(res)
        this.resultData=this.com.reFormArray(res.drinks);
        this.backupData=this.com.reFormArray(res.drinks);
        this.isLoading = false;
  
        console.log(this.resultData)
      }).catch((e)=>{
        this.isLoading = false;
  
      })
  
    }else if(this.pageType=="ing"){
      this._api.getResultsByIngredient(this.searchQuery).then((res:any)=>{
        console.log(res)

        this.resultData=this.com.reFormArray(res.drinks);
        this.backupData=this.com.reFormArray(res.drinks);
        this.isLoading = false;
  
        console.log(this.resultData)
      }).catch((e)=>{
        this.isLoading = false;
  
      })
  
    }else{
      this._api.getResultsByCategory(this.searchQuery).then((res:any)=>{
          console.log(res)
        this.resultData=this.com.reFormArray(res.drinks);
        this.backupData=this.com.reFormArray(res.drinks);
        this.isLoading = false;
  
        console.log(this.resultData)
      }).catch((e)=>{
        this.isLoading = false;
  
      })
  
    }
   
  }

  openModal(te:any,selectedTail:any){
    this.modalLoading=true;
    this.modal.open(te);
    this.loadDrink(selectedTail.id,te)

  }

  onUpdateCategory(e:any) {
    console.log(e);
    this.resultData = this.backupData.filter((i) => {
      return (
        i.category.toLowerCase().indexOf(e.toString().toLowerCase()) !== -1
      );
    });
  }
  onUpdateNames(e:any) {
    console.log(e);
    this.resultData = this.backupData.filter((i) => {
      return (
        i.drinkName.toLowerCase().indexOf(e.toString().toLowerCase()) !== -1
      );
    });
  }
  onUpdateIngredients(e:any) {
    console.log(e);
    this.resultData = this.backupData.filter((i) => {

      for(var o=0;o<i.ingredients.length;o++){
        if(i.ingredients[o].ingredient.toLowerCase().indexOf(e.toString().toLowerCase())!==-1){
          console.log("Found a Match")
          return true;
        }
      }
      return false;

    
      
    });
  }
  loadDrink(id:any,te:any){
    this._api.getResultsById(id).then((res:any)=>{
      console.log(res)
      this.activatedTail= this.com.reFormArray(res.drinks)[0];
      console.log(this.activatedTail)
    this.modalLoading=false;
  }).catch((e)=>{

    this.modalLoading=false;

  })
  }
}
