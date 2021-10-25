import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkService } from '../link.service';
import { Link } from '../modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  constructor(private serv:LinkService,private router:Router) { 
    this.loginform=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  login_submit()
  {
    Object.keys(this.loginform).forEach((field)=>{
      let control=this.loginform.get(field)
      if(control instanceof FormControl)
      {
        control.markAsTouched({onlySelf:true})
      }
    })
    if(this.loginform.valid)
    {
      console.log(this.loginform.value);
      this.serv.loginuser(this.loginform.value).subscribe(()=>{
        console.log("logged in");
        this.serv.email=this.loginform.value.email;
        this.router.navigate(['./home'])
        
      },()=>{
        console.log("error");
      })
    }
  }
}
