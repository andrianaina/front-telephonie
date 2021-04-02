import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from './../../service/myservice.service';
import { Router } from '@angular/router';
import { Result } from '../result';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,private service : MyserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    this.service.insert(f).subscribe(
      (data)=>{
        let result : Result=data as Result;
        console.log(result);
        if(result.meta['status']==200){
          alert("inscription reussi");
        }
        else{
          alert("error");
        }
        window.location.reload();
      }
    );
  }
}
