import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MainComponent} from "./main/main.component";
import {HouseComponent} from "./main/house/house.component";




const mainRoutes:Routes=[

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
