import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder,FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactMessageService } from 'src/app/contact-message.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  

  constructor( private fb: FormBuilder, private router: Router, private messageService: ContactMessageService) 
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
    this.contactForm.reset();
   
  }

  ngOnInit() {
    
  }
  
}





