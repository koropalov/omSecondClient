import {NgModel} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


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
