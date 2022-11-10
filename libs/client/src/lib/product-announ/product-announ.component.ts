import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '@nuocgiaikhat/service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
// import { IChatController, ChatParticipantType, ChatParticipantStatus } from 'ng-chat';
import { HttpClient } from '@angular/common/http';
import {ChatService} from '@nuocgiaikhat/service';
import {Message} from 'libs/service/src/lib/chat.service'
type objField = { name: string };
@Component({
  selector: 'app-product-announ',
  templateUrl: './product-announ.component.html',
  styleUrls: ['./product-announ.component.scss']
})
export class ProductAnnounComponent implements OnInit {  
  
  messages:Message[]=[];
  value:any='';

  mess:any='';
  showEmojiPicker = false;
  set='';
  isEmoji=true;
  toggleEmojiPicker() {
    this.isEmoji=false;
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event:any) {

    const { value } = this;

    console.log(`${event.emoji.native}`)
    const text = `${this.value}${event.emoji.native}`;

    this.value = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }
  public productListcart:any=[];
  public filterCategory : any;
  listProduct:any=[];
  listProductHighlight:any=[];
  slidesStore: any[]=[];
  public labels:any={   
    previousLabel:'',
    nextLabel:'',

  }

  getFourProduct:any=[];
  totalLength:any;
  page:number=1;
  productincart:any=[];
  

  constructor(private chatService:ChatService ,private http:HttpClient, private AdminService:AdminService,private Router:Router,private route:ActivatedRoute,
    private toastr:ToastrService) {
    
    
    }
    // @ViewChild('scrollMe') private myScrollContainer:any| undefined;

    // ngAfterViewChecked() {        
    //     this.scrollToBottom();        
    // } 

    // scrollToBottom(): void {
    //     try {
    //         this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    //     } catch(err) { }                 
    // }
  ngOnInit(): void {
    // this.scrollToBottom();
    this.getProduct();
    this.getProductHighlight();
    this.cartDetail();
    
    //API CHAT
    this.chatService.conversation.subscribe((val:any)=>{
      this.messages=this.messages.concat(val)
    })
  }
  sendMessage() {
    this.isEmoji=true
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left "></i>',

     '<i class="fa-solid fa-angle-right"></i>',],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
        
      }
    },
    nav: true
  }


  addtowlist(item:any){
      this.AdminService.addtowishlist(item);
      this.toastr.success('Đã thêm vào sản phẩm yêu thích','thông báo');


  }
  loader=true;
  getProduct(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      // setTimeout(()=>{
      //   this.listProduct= data;
      //   this.totalLength=data.length;
      //   this.loader=false;
      // },2000)
      this.listProduct= data;
        this.totalLength=data.length;
        this.loader=false;
      // console.log(this.listProduct)
    })
  }
  getProductHighlight(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      // console.log(data.splice(5,9))
      this.listProductHighlight= data.splice(5,4);
    })
  }
  products:any=[];
  cartDetail(){
    if(localStorage.getItem('cart-item')){
      this.products=JSON.parse(localStorage.getItem('cart-item') || '{}') ;

    }
  }



  addtoCart(product:any){
    product.qtyTotal=1;
    // console.log(item);
    // localStorage.setItem('cart-item',JSON.stringify(item))
    this.AdminService.addtoCart(product);
    this.cartNumberFunc();
    this.productNumberFunc();
    this.toastr.success('Đã thêm vào giỏ','thông báo')
}

  cartNumber:number =0;
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    console.log("cart giá trị :" + cartValue)
    this.cartNumber=cartValue.length;
    this.AdminService.cartSubject.next(this.cartNumber);
  }

  productcart:any=[];
  productNumberFunc(){
    var productValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.productcart=productValue;
    this.AdminService.productmini.next(this.productcart);

  }
  isDisplay=true;
  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }


  //API CHAT
  
}
