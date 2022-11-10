import { Component, OnInit } from '@angular/core';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import { NewsService } from '@nuocgiaikhat/service';
@Component({
  selector: 'nuocgiaikhat-tieudiem',
  templateUrl: './tieudiem.component.html',
  styleUrls: ['./tieudiem.component.scss']
})
export class TieudiemComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:true,
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


listNews:any=[];
listNewsSlide:any=[];
totalLength:any;
totalLengths:any;
page:number=1;

public labels:any={   
  previousLabel:'',
  nextLabel:'',

}
  constructor( private newsService:NewsService) { }
  ngOnInit(): void {
    this.getNews()
    this.getNewsSlide();
    this.Newsrecent()
    this.getNews3item();
  }
  loader=true;
  getNews(){
    return this.newsService.getNews().subscribe((data:any)=>{
      
        this.listNews=data;

        this.loader=false;
     
    })
  }
  getNewsSlide(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listNewsSlide=data.slice(0,4)
      console.log(this.listNewsSlide)
    })
  }
  listNews3item:any=[]
  getNews3item(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listNews3item=data.reverse().slice(1,4);
      
    })
  }
  listrecent:any=[]
  Newsrecent(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listrecent=data.reverse()[0]
      console.log(this.listrecent)
    })
  }
}
