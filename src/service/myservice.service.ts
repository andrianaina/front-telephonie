import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { baseUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http : HttpClient) { }
  logIn(f:NgForm){
    return this.http.post(baseUrl+'Users/LogIn',f.value);
  }

  logOut(id:any){
    var haha: string =localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization',haha);
    headers.set('accept','/');
    return this.http.get(baseUrl+'Users/LogOut/'+id,{headers});
  }

  getHistorique(id:any ){
    return this.http.get(baseUrl+'Historiques/'+id);
  }

  insert(f:NgForm ){
    return this.http.post(baseUrl+'Users',f.value);
  }

  
}
