import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseComponent} from "./house/house.component";
import {AdminComponent} from "./admin/admin.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {PriceComponent} from "./price/price.component";
import {YardComponent} from "./yard/yard.component";

const routes: Routes = [
  {path:'',component:HouseComponent},
  {path:'admin',component:AdminComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'price',component:PriceComponent},
  {path:'yard',component:YardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
