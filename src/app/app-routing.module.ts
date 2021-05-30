import { SearchComponent } from './pages/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent,

  },
  {
    path: "search",
    children: [
      {
        path: "names/:q",
        component: SearchComponent,
        data:{
          type:"name",
          image:"assets/ck.svg"
        }
      },
      {
        path: "ingredients/:q",
        component: SearchComponent,
        data:{
          type:"ing",
          image:"assets/apple.svg"
        }
      },
      {
        path: "category/:q",
        component: SearchComponent,
        data:{
          type:"category",
          image:"assets/coco.svg"
        }
      }
    ],
  },
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
