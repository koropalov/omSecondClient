import {NgModule} from "@angular/core";
import {HederComponent} from "../main/main/heder/heder.component";
import {FooterComponent} from "../main/main/footer/footer.component";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations:[
    //HederComponent,
    FooterComponent
  ],
  imports:[
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports:[
           //HederComponent,
           FooterComponent
  ]
})

export  class SharedModule {

}
