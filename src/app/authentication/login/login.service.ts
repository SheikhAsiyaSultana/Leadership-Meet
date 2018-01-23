import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Auth } from '../../Auth';

@Injectable()
export class LoginService {
     

     constructor(private http:Http) { 
    }

   verify(auth:Auth) {
        let cpHeaders = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: cpHeaders});
        return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAmSexlgk76x1OCnJQvgqBdhFrJHyklo18',auth,options)
         .map((res:Response) => res.json());
        }
     }   