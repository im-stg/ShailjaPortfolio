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
  visible = false;  
  message: string;

  constructor( private fb: FormBuilder, private router: Router, private snackBar : MatSnackBar, private messageService: ContactMessageService) 
    { 

      this.contactForm = this.fb.group({
        // Name : ['', Validators.required],
        Description : ['', Validators.required],
        Email : ['', Validators.required],
        });  
  

    }

     
   sendData(description,mail){

    console.log(" hello" + description,mail);
    this.visible = true; 
    this.messageService.sendMail(description,mail);
  

    setTimeout(()=> {
      this.contactForm.reset();  
     }, 500);

     
    setTimeout(()=> {
          this.visible = false; 

     }, 3500);

     if(description === "" || mail ==="" ||description === " " || mail ===" ")
     {
              this.message = "Your form is empty, please fill it before sending!";
     }
     else{
       this.message = "Your message is delivered!";
     }


    //  var msg = 'Your message is delivered to Shailja!';
    //  this.snackBar.open(msg, 'OK', {
    //          duration: 10000
    //          });
     
  }


  

  ngOnInit() {
    
  }
  
}





