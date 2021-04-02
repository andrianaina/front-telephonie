import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../../service/myservice.service';
import { Result } from '../result';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarcontent',
  templateUrl: './navbarcontent.component.html',
  styleUrls: ['./navbarcontent.component.scss']
})
export class NavbarcontentComponent implements OnInit {

  constructor(private router:Router,private service : MyserviceService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.service.logOut(localStorage.getItem('user')).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          localStorage.clear();
        }
        else{
          alert("error");
        }
        window.location.reload();
      }
    );
  }

}
