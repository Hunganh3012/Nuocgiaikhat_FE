import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { TieudiemComponent } from '../tieudiem/tieudiem.component';
import { NotFoundErrorComponent } from '../not-found-error/not-found-error.component';

// import { adminComponent } from '../admin/admin.component';
import { ProductAnnounComponent } from '../product-announ/product-announ.component';
import { HeadComponent } from '../head/head.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CKEditorModule } from 'ng2-ckeditor';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
// import { MyFilterPipe } from '../my-filter.pipe';
@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProductComponent,
    HomePageComponent,
    TieudiemComponent,
    NotFoundErrorComponent,
    ProductAnnounComponent,
    HeadComponent,
    DetailComponent,
    CartComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CarouselModule,
    ReactiveFormsModule,

    NgxSkeletonLoaderModule,
    CKEditorModule,
    PickerModule
  ],
  exports:[
    WebComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProductComponent,
    HomePageComponent,
    TieudiemComponent,
    NotFoundErrorComponent,
    ProductAnnounComponent,
    HeadComponent,
    DetailComponent,
    CartComponent,
    NewsDetailComponent
  ],
  providers: [CurrencyPipe, {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class WebModule { }
