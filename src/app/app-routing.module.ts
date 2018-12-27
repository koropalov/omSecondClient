import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main/main.component";
import {HouseComponent} from "./main/main/house/house.component";




const routes: Routes = [
  {path:'',component:MainComponent, children:[
      {path:'',component:HouseComponent}
    ]},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
