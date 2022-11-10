import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProductAnnounComponent } from '../product-announ/product-announ.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import { WebComponent } from './web.component';
// import { WishlistComponent } from '../admin/wishlist/wishlist.component';
import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
import { DangkyComponent } from '../dangky/dangky.component';
import { TuyendungComponent } from '../tuyendung/tuyendung.component';
import { TuyendungchitietComponent } from '../tuyendungchitiet/tuyendungchitiet.component';
const routes: Routes = [

  {
    path: '',
    component:WebComponent,
    
    children:[
      {
        path:'news-detail/:id',
        component:NewsDetailComponent
      },
      {
        path:'tuyendung',
        component:TuyendungComponent
      },
      {
        path:'tuyendungchitiet',
        component:TuyendungchitietComponent
      },
      {
        path:'home-page',
        component:HomePageComponent,
      
      },
      {
        path:'contact',
        component:ContactComponent,
      
      },
      {
        path:'product',
        component:ProductComponent,
        
    
      },
      // {
      //   path:"wishlist",
      //   component:WishlistComponent
      // },
      {
        path:'',
        component:ProductAnnounComponent
      },

      {
        path:'product-announ',
        component:ProductAnnounComponent,
        
      },

      {
        path:'detail/:id',
        component:DetailComponent,
        
      },
      {
        path:'cart',
        component:CartComponent,
      
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
