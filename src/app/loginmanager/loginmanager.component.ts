import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmanager',
  templateUrl: './loginmanager.component.html',
  styleUrls: ['./loginmanager.component.scss']
})
export class LoginmanagerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!= null ){
      this.router.navigateByUrl('callhistory');
    }
  }

}
