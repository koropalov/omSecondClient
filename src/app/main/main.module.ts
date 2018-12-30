import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import { HederComponent } from './main/heder/heder.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainComponent } from './main/main.component';
import { HouseComponent } from './main/house/house.component';
import { YardComponent } from './main/yard/yard.component';


@NgModule({
  declarations: [HederComponent, FooterComponent, MainComponent, HouseComponent, YardComponent],
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
