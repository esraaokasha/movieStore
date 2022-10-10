import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.pattern('([a-z]||[0-9])+@gmail.com')]),
    password:new FormControl(null,[Validators.required])
  })

  flag:boolean=false;
  errorMessage:string='invalid Password';



  constructor(private _authenticationService:AuthenticationService,private _router:Router) { }

  ngOnInit(): void {
  }

  getLoginInfo(loginForm:any){

    this._authenticationService.login(loginForm.value).subscribe((data)=>{
      if(data.message=='success'){
        this._authenticationService.getCurrentUser(data.user.first_name,data.user.last_name,data.user.email,data.token);
        this._router.navigate(['/home']);
      }
      else{

        this.flag=true;
        this.errorMessage=data.message;
      }
    })

  }

}
