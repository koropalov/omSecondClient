import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MainComponent} from "./main/main.component";
import {HouseComponent} from "./main/house/house.component";
import {YardComponent} from "./main/yard/yard.component";




const mainRoutes:Routes=[
  {path:'house',component:HouseComponent},
  {path:'yard',component:YardComponent}
]


@NgModule({
  imports:[
    RouterModule.forChild(mainRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class MainRoutingModule{

}
