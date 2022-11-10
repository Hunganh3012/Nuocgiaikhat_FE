import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddnewsComponent } from '../admin-addnews/admin-addnews.component';
import { AdminAddproductComponent } from '../admin-addproduct/admin-addproduct.component';
import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminEditnewsComponent } from '../admin-editnews/admin-editnews.component';
import { AdminEditproductComponent } from '../admin-editproduct/admin-editproduct.component';
import { AdminNewsComponent } from '../admin-news/admin-news.component';
import { AdminProductComponent } from '../admin-product/admin-product.component';
import { DasboardComponent } from '../dasboard/dasboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminClientComponent } from './admin-client.component';


const Adminroutes: Routes = [
    {
      path:'',
      component:AdminClientComponent,
      children:[
        {
          path:'admin-contact',
          component:AdminContactComponent
        },
        {
          path:'',
          component:DasboardComponent
        },
        {
          path:'dasboard',
          component:DasboardComponent
        },
        {
          path:'admin-news',
          component:AdminNewsComponent
        },
        {
          path:'admin-addnews',
          component:AdminAddnewsComponent
        },
        {
          path:'admin-editnews/:id',
          component:AdminEditnewsComponent
        },
        {
          path:'admin-product',
          component:AdminProductComponent
        },
        {
          path:'admin-addproduct',
          component:AdminAddproductComponent
        },
        {
          path:'admin-editproduct/:id',
          component:AdminEditproductComponent
        },
        {
          path:'sidebar',
          component:SidebarComponent
        }
      ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(Adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
