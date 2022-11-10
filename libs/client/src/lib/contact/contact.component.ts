import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '@nuocgiaikhat/service';

import { fromEvent, Observable } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  count = 0;
  rate = 5000;
  lastClick = Date.now() - this.rate;
  submitted=false;
  form!: FormGroup; 
  constructor( private userService:UserService,
              private router:Router,
              private toastr:ToastrService,
              private fb: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        lastname: ['', [Validators.required,Validators.minLength(2)]],
        firstname: ['',[Validators.required,Validators.minLength(2),]],
        phonenum: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
        email: ['', [Validators.required, Validators.email]],
        detail: ['', [Validators.required, Validators.minLength(3),]],
        // acceptTerms: [false, Validators.requiredTrue]
      },
    );
  }
  list:any={
    lastname:'',
    firstname:'',
    phone:'',
    email:'',
    content:'',
    time:''
  }
  // postContent(){
    
  // }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  OnSubmit(){
    this.submitted=true;

    if(Date.now()-this.lastClick >=this.rate){
      console.log(`Clicked ${++this.count} times`);
      this.lastClick=Date.now()
      if(this.form.valid){
  
        var today=new Date();
        var time = today.getHours() + ":" + today.getMinutes() +":"+ today.getSeconds();
        var date=  today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var timedate=time +" "+ date;
        this.list.time=timedate;
        console.log(timedate);
        this.toastr.success('Gửi thành công','thông báo');
         this.userService.postContent(this.list).subscribe(data=>{
    
        })
        this.router.navigateByUrl('/')
  
      }else{
        this.toastr.error('Vui lòng nhập thông tin','thông báo');
        return;
      }
    }
    
  }
}
