import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import { HederComponent } from './heder/heder.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { YardComponent } from './main/yard/yard.component';
import { PriceComponent } from './main/price/price.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { ContactsComponent } from './main/contacts/contacts.component';

@NgModule({
  declarations: [HederComponent, FooterComponent, MainComponent, YardComponent, PriceComponent, GalleryComponent, CalendarComponent, ContactsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports:[
    HederComponent,
    FooterComponent,
  ]
})
export class MainModule { }
