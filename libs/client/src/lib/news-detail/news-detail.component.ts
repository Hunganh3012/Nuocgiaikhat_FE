import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '@nuocgiaikhat/service';
@Component({
  selector: 'nuocgiaikhat-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsDetail:any=[];
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private newsService:NewsService

  ) { this.newsDetail.detail='<img'}

  ngOnInit(): void {
    this.getNewsDetail()
    this.Newsrecent()
    this.listNews3item()
  }
  getNewsDetail(){
    this.route.params.subscribe((data:any)=>{
      this.newsService.newsDetail(data.id).subscribe(data=>{
        this.newsDetail=data;
        console.log(this.newsDetail)
      })
    })
  }
  newsrecent:any=[]
  Newsrecent(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.newsrecent=data.reverse()[0];
    })
  }
  listnews3item:any=[]
  listNews3item(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listnews3item=data.reverse().splice(1,4);
    })
  }
}
