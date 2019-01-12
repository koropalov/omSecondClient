import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {HouseComponent} from "./main/house/house.component";
import {YardComponent} from "./main/yard/yard.component";
import {PriceComponent} from "./main/price/price.component";
import {GalleryComponent} from "./main/gallery/gallery.component";
import {CalendarComponent} from "./main/calendar/calendar.component";
import {ContactsComponent} from "./main/contacts/contacts.component";
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main/main.component";



const mainRoutes:Routes=[
      {path:'',component:MainComponent,children:[
      {path:'house',component:HouseComponent},
      {path:'yard',component:YardComponent},
      {path:'price',component:PriceComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'calendar',component:CalendarComponent},
      {path:'contacts',component:ContactsComponent}]}
]


@NgModule({
  imports:[
    RouterModule.forChild(mainRoutes),
    CommonModule,

  ],
  exports:[
    RouterModule,
  ]
})
export class MainRoutingModule{

}
