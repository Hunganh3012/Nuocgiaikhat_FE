import { Component, OnInit } from '@angular/core';
import { AdminService } from '@nuocgiaikhat/service';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
// import Swal from 'sweetalert2'
import * as $ from 'jquery';
// import * as ClassicEditorBuild from "@ckeditor/ckeditor5-build-classic";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

type objField = { name: string };

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  
  fields:any = {
    name: '',
    
  };
  filter1 = {};
  filter = {};

  updateFilters() {
    Object.keys(this.fields).forEach(key => this.fields[key] === '' ? delete this.fields[key] : key);
    this.filter = Object.assign({}, this.fields);
  }

  listproductAdmin:any=[];
  totalLength:any;
  page:number=1;
  public labels:any={   
    previousLabel:'',
    nextLabel:'',
  }
  constructor( private AdminService:AdminService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.getProduct();

  }
  getProduct(){
    return this.AdminService.getProduct().subscribe((data:any)=>{
      this.listproductAdmin=data;
    })

  }
  deleteProduct(id:number){

  }
  // deleteProduct(id:number){
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
  //        this.AdminService.deleteProduct(id).subscribe(data=>{
  //         this.listproductAdmin=this.listproductAdmin.filter((item:any) =>{
  //             return item.id !=id;
  //         })
  //         this.toastr.success('Xóa thành công','thông báo');    })
  //     }
  //   })
    
  // }
  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.listproductAdmin, event.previousIndex, event.currentIndex);
  }
}
