import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from 'libs/client/src/lib/dangnhap/dangnhap.component';
import { DangkyComponent } from 'libs/client/src/lib/dangky/dangky.component';
import { QuenmatkhauComponent } from 'libs/client/src/lib/quenmatkhau/quenmatkhau.component';
import { NotFoundErrorComponent } from 'libs/client/src/lib/not-found-error/not-found-error.component';
import {AuthGuard} from 'libs/service/src/lib/auth.guard'

const routes: Routes = [
  {
    path:'web',
    // component:WebComponent
    loadChildren: ()=> import('libs/client/src/lib/web/web.module').then((m) => m.WebModule)
  },
  {
    path:'dangnhap',
    component:DangnhapComponent
  },
  {
    path:'dangky',
    component:DangkyComponent
  },
  {
    path:'quenmatkhau',
    component:QuenmatkhauComponent
  },

  {
    path:'admin',
    loadChildren : ()=> import('libs/admin/src/lib/admin-client/admin-client.module').then((m)=> m.AdminClientModule),
    canActivate:[AuthGuard]
    
  },
  {
    path:"",
    redirectTo:'/web/product-announ',
    pathMatch:'full',

  },
  {
    path:'**',
    component:NotFoundErrorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
