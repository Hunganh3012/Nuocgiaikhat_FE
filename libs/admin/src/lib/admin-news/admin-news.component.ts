import { Component, OnInit } from '@angular/core';
import { NewsService } from '@nuocgiaikhat/service';
// import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {
  totalLength:any;
  page:number=1;
  fields:any = {
    name: '',
    
  };
  filter1 = {};
  filter = {};

  public labels:any={   
    previousLabel:'',
    nextLabel:'',
  }
  constructor(private newsService:NewsService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.getNews();
  }
  updateFilters() {
    Object.keys(this.fields).forEach(key => this.fields[key] === '' ? delete this.fields[key] : key);
    this.filter = Object.assign({}, this.fields);
  }
  listNews:any=[];
  getNews(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listNews=data;
    })
  }
  deleteNews(id:number){
    // Swal.fire({
    //   title: 'Bạn chắc chắn xóa không ?',
    //   text: "Sẽ bị xóa vĩnh viễn",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   cancelButtonText:'Hủy',
    //   confirmButtonText: 'Xóa thông tin'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Xóa thành công',
    //       'Thông tin đã được xóa',
    //       'success'
    //     )
    //      this.newsService.deleteNews(id).subscribe(data=>{
    //       this.listNews=this.listNews.filter((item:any) =>{
    //           return item.id !=id;
    //       })
    //       this.toastr.success('Xóa thành công','thông báo');    })
    //   }
    // })
  }
  
}
