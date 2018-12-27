import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import { HederComponent } from './main/heder/heder.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainComponent } from './main/main.component';
import { HouseComponent } from './main/house/house.component';


@NgModule({
  declarations: [HederComponent, FooterComponent, MainComponent, HouseComponent],
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
