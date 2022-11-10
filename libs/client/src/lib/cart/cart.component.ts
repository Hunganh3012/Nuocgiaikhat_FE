import { Component, OnInit } from '@angular/core';
import { AdminService } from '@nuocgiaikhat/service';
import { ActivatedRoute,Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ViewChildren, ElementRef, QueryList  } from '@angular/core';
import { AuthService } from '@nuocgiaikhat/service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'nuocgiaikhat-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChildren('subTotalWrap')  subTotalItems!:QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')  subTotalItems_existing!: QueryList<ElementRef>;
  isShowClose=true;
  cart:any=[];
  constructor(
    private authService:AuthService,
    private adminService:AdminService, 
    private route:ActivatedRoute,
    private Router:Router,
    private currencyPipe: CurrencyPipe ,
    private toastr:ToastrService
    // private builder: FormBuilder
    ) { }
  public totalItem:number=0;
  ngOnInit(): void {
    this.adminService.loadCart();
      this.cartDetail();
  }

  getCartDetail:any=[];
  cartDetail(){
    if(localStorage.getItem('cart-item')){
      this.getCartDetail=JSON.parse(localStorage.getItem('cart-item') || '{}') ;
      // console.log(this.getCartDetail);
    }
  }
  
  
  
  
  successbuy(){
    this.adminService.clearCart(this.getCartDetail);
    this.Router.navigateByUrl("/web/product-announ");
    this.authService.open();
    this.isShowClose=true;
    this.cartNumberFunc();
    this.productNumberFunc();
    this.toastr.success('Mua thành công','thông báo')
  }
  clearCart(item:any){
    this.adminService.clearCart(this.getCartDetail);

    this.cartNumberFunc();
    this.productNumberFunc();
    this.toastr.success('Xóa thành công giỏ hàng','thông báo')
  }
  removeFromCart(item:any) {
    this.adminService.removeItem(item);
    this.getCartDetail = this.adminService.getItems();
    console.log(this.getCartDetail)
    this.cartNumberFunc();
    this.productNumberFunc();
    this.toastr.success('Xóa thành công','thông báo')
  }
  get Total(){
    return this.getCartDetail.reduce((sum:any,x:any) =>({
      qtyTotal: 1,
      priceold:sum.priceold +x.qtyTotal * x.priceold
    }),
    {qtyTotal:1, priceold:0}
    ).priceold;
  }

  increase(prod:any){
      prod.qtyTotal +=1;
      this.productNumberFunc(); 
    localStorage.setItem('cart-item',JSON.stringify(this.getCartDetail))
    // this.getCartDetail = this.adminService.getItem();
    // this.qtyNumberFunc(prod.qtyTotal)

  }
  decrease(prod:any){
    if(prod.qtyTotal !=0){
      prod.qtyTotal -=1;
      this.productNumberFunc();
    localStorage.setItem('cart-item',JSON.stringify(this.getCartDetail))
    }

  }

  cartNumber:number =0;
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.cartNumber=cartValue.length;
    this.adminService.cartSubject.next(this.cartNumber);
  }


  // changeSubtotal(item:any, index:number) {
  //   const qty = item.qtyTotal;
  //   console.log(qty)
  //   const amt = item.priceold;
  //   const subTotal = amt * qty;
  //   const subTotal_converted = this.currencyPipe.transform(subTotal,"VND",'symbol','1.2-3');
  //   this.subTotalItems.toArray()[index].nativeElement.innerHTML =subTotal_converted;
  //   console.log(this.subTotalItems)
  //   this.adminService.saveCart();
  // }







  productcart:object=[];
  productNumberFunc(){
    var productValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.productcart=productValue;
    console.log(this.productcart)
    this.adminService.productmini.next(this.productcart);
  }


}
