import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { userData } from 'src/userData'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser=new BehaviorSubject(new userData(null,null,null,null));

  constructor(private _httpClient:HttpClient,private _router:Router) { 
    if(localStorage.getItem('userData')!=null ){
      
      this.currentUser.next(JSON.parse(localStorage.getItem('userData')!));
    }
  }

  register(registrationFormValue:any):Observable<any>{
    return this._httpClient.post('https://routeegypt.herokuapp.com/signup',registrationFormValue)
  }

  login(loginFormValue:any):Observable<any>{
    return this._httpClient.post('https://routeegypt.herokuapp.com/signin',loginFormValue)
  }

  logout(){
    this.currentUser.next(new userData(null,null,null,null));
    localStorage.removeItem('userData');
    this._router.navigate(['/login']);

  }

  getCurrentUser(first_name:any,last_name:any,email:any,token:any){
    let user = new userData(first_name,last_name,email,token);
    localStorage.setItem('userData',JSON.stringify(user));
    this.currentUser.next(user);
  }
}
