import { Component, OnInit } from '@angular/core';
import { AdminService } from '@nuocgiaikhat/service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Input } from '@angular/core';
import {Cloudinary, CloudinaryImage, } from '@cloudinary/url-gen';
import { FileUploadService } from '@nuocgiaikhat/service';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as $ from 'jquery';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-admin-addproduct',
  templateUrl: './admin-addproduct.component.html',
  styleUrls: ['./admin-addproduct.component.scss'],
  providers:[FileUploadService]
})
export class AdminAddproductComponent implements OnInit {
  ckeConfig!: CKEDITOR.config;
  // editor = ClassicEditor;
  data:any ='' ;
  count = 0;
  rate = 5000;
  lastClick = Date.now() - this.rate;
  formControlExample = new FormControl(20);
  value="0";
  listadd:any={
    name:'',
    sale:'',
    priceold:'',
    detail:'',
    img:''
  }


  constructor( private AdminService:AdminService,
     private Router:Router,
     private toastr :ToastrService,
     private formBuilder: FormBuilder,
      private uploadfileService:FileUploadService
  ) { }
  
  

  // FORM VALIDATION
  form!: FormGroup; 
  submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameproduct: ['', [Validators.required,Validators.minLength(6)]],
        // linkphoto: ['',[Validators.required,Validators.minLength(6),]],
        priceold: ['', [Validators.required,Validators.pattern("[0-9 ]{2,10}")]],
        sale: ['', [Validators.required, Validators.pattern("[0-9 ]{1,2}")]],
                acceptTerms: [false, Validators.requiredTrue]
      },
    );

      //UPLOAD FILE
  }
  img!: CloudinaryImage;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  OnSubmit() {
    this.submitted = true;
    let imageapi:any='';
    
    if(Date.now()-this.lastClick >=this.rate){
      console.log(`Clicked ${++this.count} times`);
      this.lastClick=Date.now();
      if(this.form.valid){
        const file_data=this.file[0]; 
        const data= new FormData();
        data.append('file',file_data)
        data.append('upload_preset','project-angular');
        data.append('cloud_name','db1zqfcad')
        this.uploadfileService.upload(data).subscribe(response =>{
          imageapi=response.secure_url;
          this.listadd.img=imageapi;
          this.AdminService.addProduct(this.listadd).subscribe(data =>{
            this.Router.navigateByUrl('/admin/admin-product')
            this.toastr.success('Thêm thành công','thông báo');
          })
        })
        //Success add product
      }else{
        this.toastr.error('Vui lòng nhập thông tin','thông báo');
        return;
      }
    }
    

    //Upload FILE

  }  
  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
  //Upload File
  file:File[]=[]
  onSelect(event:any) {
    console.log(event);
    this.file.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.file.splice(this.file.indexOf(event), 1);
  }

  //Currency VND
  montantAnnuel!: number;
}




