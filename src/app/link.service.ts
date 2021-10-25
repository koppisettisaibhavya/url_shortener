import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/HTTP';
import {Link,registeruser,loginuser} from './modal';
@Injectable({
  providedIn: 'root'
})
export class LinkService {
  email:string=""
  constructor(private http:HttpClient) { 
    this.email="";
  }
  savelink(link:Link): any
  {
    return this.http.post(`https://61655a84cb73ea0017641f65.mockapi.io/bitly`,link);
  }
  getAlllinks(): any
  {
    return this.http.get<Array<Link>>(`https://61655a84cb73ea0017641f65.mockapi.io/bitly`);
  }
  getlinksbyID(id?:number)
  {
    return this.http.get<Link>(`https://61655a84cb73ea0017641f65.mockapi.io/bitly/${id}`);
  }
  updatelink(link:Link,id?:number)
  {
    return this.http.put(`https://61655a84cb73ea0017641f65.mockapi.io/bitly/${id}`,link)
  }
  registeruser(data:registeruser)
  {console.log(data)
    return this.http.post(`https://urlapi123.herokuapp.com/user/register`,data);
  }
  loginuser(data:loginuser)
  {
    return this.http.post(`https://urlapi123.herokuapp.com/user/login`,data);
  }
}
