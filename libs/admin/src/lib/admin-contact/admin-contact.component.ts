import { Component, OnInit } from '@angular/core';
import { UserService } from '@nuocgiaikhat/service';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
// import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {
  fields:any = {
    name: '',
    
  };
  filter1 = {};
  filter = {};

  updateFilters() {
    Object.keys(this.fields).forEach(key => this.fields[key] === '' ? delete this.fields[key] : key);
    this.filter = Object.assign({}, this.fields);
  }
  list:any=[];
  page:number=1;
  totalLength:any;
  selectlist:any=[];
  public labels:any={   
    previousLabel:'',
    nextLabel:'',

  }
  constructor( private UserService:UserService,private toastr:ToastrService) { }

  ngOnInit(): void {

    // this.renderContent();
  }
  sum=0;
 numId:number=0;
  // renderContent(){
  //   return this.AppService.renderContent().subscribe(data =>{
  //     this.list=data;
  //   })
  // }
  deleteContent(id:number){}
  // deleteContent(id:number){
  //   Swal.fire({
  //     title: 'Bạn chắc chắn xóa không ?',
  //     text: "Sẽ bị xóa vĩnh viễn",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     cancelButtonText:'Hủy',
  //     confirmButtonText: 'Xóa thông tin'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Xóa thành công',
  //         'Thông tin đã được xóa',
  //         'success'
  //       )
  //       this.toastr.success('Xóa thành công','thông báo')
  //       this.AppService.deleteContent(id).subscribe(data=>{
  //         this.list=this.list.filter((item:any) =>{
  //           return item.id !=id;
  //         })
  //       })
  //     }
  //   })

  // }

  parentSelector:boolean=false;
  onChangelist($event:any){
    const listid=$event.target.value;
    const isChecked=$event.target.checked;
    this.list=this.list.filter((d:any)=>{
      if(d.id == listid){
        d.select =isChecked;
        console.log(d)
      }
      if(listid == -1){
        d.select=this.parentSelector;
        return d;
      }
      return d;
    })

  }
  deleteChoose(){
    //list: là danh sach khách hàng;
    this.list=this.list.forEach((e:any,) => {
      if(e.select == true){
        this.selectlist.push(e);
      }
      
    })
    console.log(this.selectlist);
    //this.selectlist: là mảng mới gồm các obj được click checkbox.
    //bên phần Service:
    // deleteContent(id:number){
    //   return this.http.delete(`${this.API_URL}/${id}`)
    // }
    // this.selectlist=this.selectlist.forEach((item:any) =>{
    //   this.AppService.deleteContent(item.id).subscribe((data)=>{
    //     this.list=this.list.filter((e:any) =>{
    //       return e.id !=item.id;
    //     })
    //   })
    
    // })

  }
  clearAll(){
      
  }
  
}



