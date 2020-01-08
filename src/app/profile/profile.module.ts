import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
    ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent
    
  ]
})
export class ProfileModule { }
