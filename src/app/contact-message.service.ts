import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  constructor(private http: Http) { }

  public sendMail(description , mail) {

       // console.log("In service",feedback);
    const headers = new Headers({
        'Content-Type' : 'application/json'
    });

   return this.http.post("https://formspree.io/mvozjeav", 
        {
            // name: 'test',
            _replyto: mail,
            message: description
        },
        {
            'headers' : headers
        }
    ).subscribe(res => console.log(res.json())  
    );
}
}

