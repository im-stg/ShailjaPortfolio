import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder,FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactMessageService } from 'src/app/contact-message.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  

  constructor( private fb: FormBuilder, private router: Router, private snackBar : MatSnackBar, private messageService: ContactMessageService) 
    { 

      this.contactForm = this.fb.group({
        // Name : ['', Validators.required],
        Description : ['', Validators.required],
        Email : ['', Validators.required],
        });  
  

    }

     
   sendData(description,mail){

    console.log(description,mail);

    this.messageService.sendMail(description,mail);
  

    setTimeout(()=> {
      this.contactForm.reset();  
                  
     }, 500);


    //  var msg = 'Your message is delivered to Shailja!';
    //  this.snackBar.open(msg, 'OK', {
    //          duration: 10000
    //          });
     
  }


  

  ngOnInit() {
    
  }
  
}





