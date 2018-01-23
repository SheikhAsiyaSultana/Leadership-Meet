import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Auth } from '../../Auth';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  
  public email:string;
  public password:string;
  public localId:string;
  public registered:boolean;
  public status:number;
  public msg:string;

  constructor(private loginService:LoginService,private router: Router) { 
   
  }

  ngOnInit() {  
  }

  verifyUser(f){
   this.email=f.value.email;
   this.password=f.value.password;
   let auth =new Auth(this.email,this.password);
   this.loginService.verify(auth)
        .subscribe(
            (res) => {
            this.localId=res.localId;
            this.registered=res.registered;
            this.status=res.status;
            if (this.status==undefined){
                 this.msg="Login Successful";
                 this.router.navigate(['/dashboard']);
                 }
             else if (this.status==400){
                  this.msg="Login Failed";    
             }
            console.log(res);
            console.log(this.registered);
            console.log(this.localId);  
         },
            (err) => console.log(err));
            f.reset();
  }

}
