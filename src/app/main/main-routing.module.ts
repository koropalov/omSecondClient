import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MainComponent} from "./main/main.component";
import {YardComponent} from "./main/yard/yard.component";
import {PriceComponent} from "./main/price/price.component";
import {GalleryComponent} from "./main/gallery/gallery.component";
import {CalendarComponent} from "./main/calendar/calendar.component";
import {ContactsComponent} from "./main/contacts/contacts.component";



const mainRoutes:Routes=[
  {path:'',component:MainComponent},
  {path:'yard',component:YardComponent},
  {path:'price',component:PriceComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'contacts',component:ContactsComponent},
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
