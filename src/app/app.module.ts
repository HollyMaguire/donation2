import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { GiftsComponent } from './gifts/gifts.component';
import { DonationManagmentComponent } from './donation-managment/donation-managment.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { EditformComponent } from './editform/editform.component';


import {MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthguardService } from './auth.service';
import { RedirectComponent } from './redirect/redirect.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';



@NgModule({
  declarations: [ 
    AppComponent,
    InfoFormComponent,
    GiftsComponent,
    DonationManagmentComponent,
    NavBarComponent,
    UserManagmentComponent,
    LoginComponent,
    EditformComponent,
    RedirectComponent,
    MakeDonationComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule 
    
  ],
  
  providers: [UserService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
