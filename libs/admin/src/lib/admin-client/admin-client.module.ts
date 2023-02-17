import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NgxPaginationModule } from 'ngx-pagination';
import { FileUploadModule } from "ng2-file-upload"; 
import {CloudinaryModule} from '@cloudinary/ng';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrencyMaskModule} from 'ng2-currency-mask';
import { MyFilterPipe } from '../my-filter.pipe';
import { CKEditorModule } from 'ng2-ckeditor';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminProductComponent } from '../admin-product/admin-product.component';
import { AdminAddproductComponent } from '../admin-addproduct/admin-addproduct.component';
import { AdminEditproductComponent } from '../admin-editproduct/admin-editproduct.component';
import { AdminOptionComponent } from '../admin-option/admin-option.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DasboardComponent } from '../dasboard/dasboard.component';
import { AdminNewsComponent } from '../admin-news/admin-news.component';
import { AdminAddnewsComponent } from '../admin-addnews/admin-addnews.component';
import { AdminEditnewsComponent } from '../admin-editnews/admin-editnews.component';
import { AdminRoutingModule } from './admin-client-routing.module';
import { AdminClientComponent } from './admin-client.component';


@NgModule({
  declarations: [
    AdminClientComponent,
    AdminContactComponent,
    AdminProductComponent,
    AdminAddproductComponent,
    AdminEditproductComponent,
    AdminOptionComponent,
    SidebarComponent,
    DasboardComponent,
    AdminNewsComponent,
    AdminAddnewsComponent,
    MyFilterPipe,
 AdminEditnewsComponent   
    // HeadComponent
    // WishlistComponent,
  ],
  imports: [
    DragDropModule,
    NgxPaginationModule ,
    MatButtonModule,
    MatCheckboxModule ,
    CommonModule,
    CKEditorModule,
    FileUploadModule,
    CloudinaryModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    NgxDropzoneModule,
    CurrencyMaskModule,

  ],


})
export class AdminClientModule { }
