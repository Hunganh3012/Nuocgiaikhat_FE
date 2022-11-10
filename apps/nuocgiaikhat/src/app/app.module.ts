import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebModule } from 'libs/client/src/lib/web/web.module';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
            HttpClientModule,
            WebModule,
            AppRoutingModule,
            ToastrModule.forRoot(),
            BrowserAnimationsModule ,
            NgxCurrencyModule ,
            CurrencyMaskModule, CarouselModule  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
