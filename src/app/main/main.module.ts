import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {MainRoutingModule} from "./main-routing.module";
import { HederComponent } from './main/heder/heder.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainComponent } from './main/main.component';
import { HouseComponent } from './main/house/house.component';
import { YardComponent } from './main/yard/yard.component';
import { PriceComponent } from './main/price/price.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import {CarouselModule} from "ngx-bootstrap/carousel";





@NgModule({
  declarations: [HederComponent,
                 FooterComponent,
                 MainComponent,
                 HouseComponent,
                 YardComponent,
                 PriceComponent,
                 GalleryComponent,
                 CalendarComponent,
                 ContactsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    HederComponent,
    FooterComponent
  ]
})
export class MainModule { }
