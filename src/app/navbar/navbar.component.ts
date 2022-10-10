import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false;
  changeBackground = false;

  constructor(private _authenticationService:AuthenticationService,private _viewPortScroller:ViewportScroller) {
     _authenticationService.currentUser.subscribe((data)=>{
       if(data.token!=null){
         this.isLogin=true;
       }
       else{
         this.isLogin=false;
       }
     })

   }

   logout(){
     this._authenticationService.logout();
   }

   scroll(){

    
    let scrollTop=this._viewPortScroller.getScrollPosition()[1];


    if (scrollTop >= 100) {
      this.changeBackground=true;
    }
    else{
      this.changeBackground=false;
    }
    
   }

  ngOnInit(): void {
  }

}
