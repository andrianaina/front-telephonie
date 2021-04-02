import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from './../../service/myservice.service';
import { Router } from '@angular/router';
import { Result } from '../result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service : MyserviceService) { }
  message:string='no message'; 
  
  ngOnInit(): void {
   
  }

  onSubmit(f:NgForm){
    this.service.logIn(f).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          localStorage.setItem('user',result.data[0]['id']);
          localStorage.setItem('token',result.data[0]['token']);
        }
        else{
          this.message=result.meta['message'];
        }
        window.location.reload();
      }
    );
  }

}
