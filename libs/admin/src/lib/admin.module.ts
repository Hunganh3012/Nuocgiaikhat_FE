import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddnewsComponent } from './admin-addnews/admin-addnews.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminEditnewsComponent } from './admin-editnews/admin-editnews.component';
import { AdminEditproductComponent } from './admin-editproduct/admin-editproduct.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOptionComponent } from './admin-option/admin-option.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { MyFilterPipe } from './my-filter.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  imports: [CommonModule,CarouselModule],
  declarations: [
    AdminClientComponent ,
    AdminAddnewsComponent,
    AdminAddproductComponent,
    AdminContactComponent,
    AdminEditnewsComponent,
    AdminEditproductComponent,
    AdminNewsComponent,
    AdminProductComponent,
    AdminOptionComponent,
    DasboardComponent,
    SidebarComponent,
    MyFilterPipe,
  ],
  exports:[
    AdminClientComponent ,
    AdminAddnewsComponent,
    AdminAddproductComponent,
    AdminContactComponent,
    AdminEditnewsComponent,
    AdminEditproductComponent,
    AdminNewsComponent,
    AdminProductComponent,
    AdminOptionComponent,
    DasboardComponent,
    SidebarComponent,
  ]
})
export class AdminModule {}
