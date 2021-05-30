import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public router:Router) { }


  reFormArray(drinksArray:[]){
    if(drinksArray==null){
      return [];
    }
    return drinksArray.map(e=>{
        let obj: any={};
        obj['drinkName']=e['strDrink'];
        obj['category']=e['strCategory'];
        obj['glass']=e['strGlass'];
        obj['id']=e['idDrink'];
        obj['thumb']=e['strDrinkThumb'];
        obj['instructions']=e['strInstructions'];
        obj['ingredients']=[];
        let ingObj = Object.keys(e);
      //  for(var i =1;i<ingObj.length+1;i++){
      //     if(ingObj[i]=="strIngredient"+i&&ingObj[]){

      //     }
      //  } 

      if(e['strIngredient1']!=null&&e['strMeasure1']!=null){
        let tObj = {ingredient:e['strIngredient1'],measure:e['strMeasure1']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient2']!=null&&e['strMeasure2']!=null){
        let tObj = {ingredient:e['strIngredient2'],measure:e['strMeasure2']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient3']!=null&&e['strMeasure3']!=null){
        let tObj = {ingredient:e['strIngredient3'],measure:e['strMeasure3']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient4']!=null&&e['strMeasure4']!=null){
        let tObj = {ingredient:e['strIngredient4'],measure:e['strMeasure4']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient5']!=null&&e['strMeasure5']!=null){
        let tObj = {ingredient:e['strIngredient5'],measure:e['strMeasure5']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient6']!=null&&e['strMeasure6']!=null){
        let tObj = {ingredient:e['strIngredient6'],measure:e['strMeasure6']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient7']!=null&&e['strMeasure7']!=null){
        let tObj = {ingredient:e['strIngredient7'],measure:e['strMeasure7']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient8']!=null&&e['strMeasure8']!=null){
        let tObj = {ingredient:e['strIngredient8'],measure:e['strMeasure8']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient9']!=null&&e['strMeasure9']!=null){
        let tObj = {ingredient:e['strIngredient9'],measure:e['strMeasure9']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient10']!=null&&e['strMeasure10']!=null){
        let tObj = {ingredient:e['strIngredient10'],measure:e['strMeasure10']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient11']!=null&&e['strMeasure11']!=null){
        let tObj = {ingredient:e['strIngredient11'],measure:e['strMeasure11']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient12']!=null&&e['strMeasure12']!=null){
        let tObj = {ingredient:e['strIngredient12'],measure:e['strMeasure12']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient13']!=null&&e['strMeasure13']!=null){
        let tObj = {ingredient:e['strIngredient13'],measure:e['strMeasure13']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient14']!=null&&e['strMeasure14']!=null){
        let tObj = {ingredient:e['strIngredient14'],measure:e['strMeasure14']}
        obj['ingredients'].push(tObj)
      }
      if(e['strIngredient15']!=null&&e['strMeasure15']!=null){
        let tObj = {ingredient:e['strIngredient15'],measure:e['strMeasure15']}
        obj['ingredients'].push(tObj)
      }
      return obj;
      })
  }

  route(path:any){
    this.router.navigateByUrl(path)
  }
  routeToPath(path:any,el:any){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([path,el])
  }
}
