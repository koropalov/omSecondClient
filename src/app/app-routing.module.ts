import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main/main.component";
import {HouseComponent} from "./main/main/house/house.component";
import {MainRoutingModule} from "./main/main-routing.module";




// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'house',redirectTo:'house'},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
