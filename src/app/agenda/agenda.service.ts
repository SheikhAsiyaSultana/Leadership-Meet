import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AgendaService {
     

     constructor(private http:Http) { 
    }

   getAllSpeakers() {
         return this.http.get('https://gis-2018.firebaseio.com/speakers/s001.json')
	       .map((res:Response) => res.json());
        }
  }      
       