import {NgModel} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const adminRoutes:Routes=[

]


@NgModule({
  imports:[
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule{

}
