import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  news_api="https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/news"
  getNews(){
    return this.http.get(`${this.news_api}`)
  }
  addNews(data:any){
    return this.http.post(this.news_api,data)
  }
  deleteNews(id:number){
    return this.http.delete(`${this.news_api}/${id}`)
  }
  updateNews(id:number,data:any){
    return this.http.put(`${this.news_api}/${id}`,data)
  }

  newsDetail(id:number){
    return this.http.get(`${this.news_api}/${id}`)
  }

}
