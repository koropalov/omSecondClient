import {NgModule} from "@angular/core";
import {HederComponent} from "../main/main/heder/heder.component";
import {FooterComponent} from "../main/main/footer/footer.component";

@NgModule({
  declarations:[
    //HederComponent,
    FooterComponent
  ],
  exports:[
           //HederComponent,
           FooterComponent
  ]
})

export  class SharedModule {

}
