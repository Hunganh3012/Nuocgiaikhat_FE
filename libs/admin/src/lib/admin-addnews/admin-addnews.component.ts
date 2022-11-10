/// <reference types="@types/ckeditor" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '@nuocgiaikhat/service';
import { CKEditorComponent } from 'ng2-ckeditor';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
// import Adapter from '../ckeditorAdaptor';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { FileUploadService } from '@nuocgiaikhat/service';
@Component({
  selector: 'app-admin-addnews',
  templateUrl: './admin-addnews.component.html',
  styleUrls: ['./admin-addnews.component.scss']
})
export class AdminAddnewsComponent implements OnInit {
  // public Editor = ClassicEditor;
  ckeConfig!: CKEDITOR.config;
  mycontent: string | undefined;
  log: string = '';
  public componentEvents: string[] = [];
  formControlExample = new FormControl(20);
  form!: FormGroup; 
  submitted = false;
  listadd:any={
    image:'',
    name:'',
    days:'',
    athour:'',
    time:''
  }
  @ViewChild("myckeditor") ckeditor!: CKEditorComponent;
  constructor(private newsService:NewsService,
              private formBuilder:FormBuilder,
              private toastr :ToastrService,
              private router:Router,
              private uploadfileService:FileUploadService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameproduct: ['', [Validators.required,Validators.minLength(6)]],
        // linkphoto: ['',[Validators.required,Validators.minLength(6),]],
      },
    );
    //Ckeditor
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      removePlugins: 'exportpdf'
    };
  }
  img!: CloudinaryImage;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  OnSubmit(){
    this.submitted = true;
    let imageapi:any='';
    if(this.form.valid){
      var today=new Date();
      var date=  today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      var timedate=date;
      this.listadd.time=timedate;
      const file_data=this.file[0]; 
      const data= new FormData();
      data.append('file',file_data)
      data.append('upload_preset','project-angular');
      data.append('cloud_name','db1zqfcad')
      // this.uploadfileService.upload(data).subscribe(response =>{
      //   imageapi=response.secure_url;
      //   this.listadd.image=imageapi;
      //   console.log(this.listadd.image)
      //   this.newsService.addNews(this.listadd).subscribe((data)=>{
      //     this.router.navigateByUrl('admin/admin-news')
      //       this.toastr.success('Thêm thành công','thông báo');
      //     })
      // })
    }
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
  // onReady(editor:any){
  //   editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader: any ) => {

  //   return new Adapter(loader, editor.config);;
  // };  
  // }
  
}
