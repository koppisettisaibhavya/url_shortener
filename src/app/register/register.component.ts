import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {registeruser} from '../modal';
import { LinkService } from '../link.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  cpassw:string="";
  //cpasswflag:boolean=false;
  userdata:registeruser=Object();
  constructor(private serv:LinkService,private router:Router) {
    this.registerForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required]),
      'cpassword':new FormControl(''),
      'dob':new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  register_submit()
  {//console.log("**");
    this.userdata=this.registerForm.value 
    
    Object.keys(this.registerForm.controls).forEach((field)=>{
      const control=this.registerForm.get(field);
      if(control instanceof FormControl)
      {
        control.markAsTouched({onlySelf:true});
      }
    })
    if(this.registerForm.valid)
    {
      //delete this.userdata.cpassword
      var a=Object()
      a.email=this.registerForm.value['email']
      a.password=this.registerForm.value['password']
      a.dob=this.registerForm.value['dob']
      console.log(this.registerForm.value)
      this.serv.registeruser(a).subscribe(()=>{
        console.log("registered successfully")
        this.router.navigate(['/login']);
      },()=>{
        console.log("error")
      })
    }
  }
}
