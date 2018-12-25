import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HouseComponent } from './house/house.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PriceComponent } from './price/price.component';
import { YardComponent } from './yard/yard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CalendarComponent,
    ContactsComponent,
    HouseComponent,
    GalleryComponent,
    PriceComponent,
    YardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
