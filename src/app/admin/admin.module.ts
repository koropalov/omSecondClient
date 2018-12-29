import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminComponent } from './admin/admin.component';
import { AdminHederComponent } from './admin/admin-heder/admin-heder.component';

@NgModule({
  declarations: [AdminComponent, AdminHederComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
