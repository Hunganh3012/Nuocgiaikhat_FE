import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


    
  constructor(private http:HttpClient) { }
  

  upload(val:any):Observable<any> {
      let data = val; 
      return this.http.post('https://api.cloudinary.com/v1_1/db1zqfcad/image/upload',data)
  }
  // getload(vals:any):Observable<any>{
  //   let data=vals;
  //   return this.http.get('')
  // }
}
