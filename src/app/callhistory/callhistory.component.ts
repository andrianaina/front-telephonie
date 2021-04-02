import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../../service/myservice.service';
import { Result } from '../result';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-callhistory',
  templateUrl: './callhistory.component.html',
  styleUrls: ['./callhistory.component.scss']
})
export class CallhistoryComponent implements OnInit {
  public callhistoryheader=["idoperateur" ,"telephone","duree","dateappel"];
  callhistory=[];

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.getHistoriques()
  }

  getHistoriques():void{
    this.service.getHistorique(localStorage.getItem('user')).subscribe(
      (data)=>{
        let result : Result=data as Result;
        if(result.meta['status']==200){
          this.callhistory=result.data;
          
        console.log(result);
        }
       }
    );
  }

}
