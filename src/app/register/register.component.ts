import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  flag:boolean=false;
  
  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    last_name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.pattern('([a-z]||[0-9])+@gmail.com')]),
    password:new FormControl(null,[Validators.required])
  })
 

  
   getRegistrationInfo(registerForm:any){
     
     this._authenticationService.register(registerForm.value).subscribe((data)=>{
       if(data.message=='success'){

        this._router.navigate(['/login']);
       }
       else{
         this.flag=true;
       }
     })

   }

  constructor(private _authenticationService:AuthenticationService,private _router:Router) {}

  ngOnInit(): void {
  }

}
