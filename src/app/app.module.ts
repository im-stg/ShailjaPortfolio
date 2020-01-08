import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactMessageService } from './contact-message.service';

const routes: Routes = [
  {
    path: '', component: ProfileComponent
  } 
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    HttpModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule
  ],

 
  providers: [ ContactMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
