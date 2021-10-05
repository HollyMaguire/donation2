import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';
import { GiftsComponent } from './gifts/gifts.component';
import { DonationManagmentComponent} from './donation-managment/donation-managment.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AuthguardService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './user.guard';
import { EditformComponent } from './editform/editform.component';
import { RedirectComponent } from './redirect/redirect.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';

const routes: Routes = [
  {path: 'infoForm', component: InfoFormComponent},
  {path: 'gift/:name', component: GiftsComponent},
  {path:'users', component: UserManagmentComponent, canActivate:[UserGuard]},
  {path: '', component: DonationManagmentComponent, canActivate:[UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'edit/:user_id', component: EditformComponent, canActivate:[UserGuard]},
  {path: 'edit', component: EditformComponent, canActivate:[UserGuard]},
  {path: 'thanks', component: RedirectComponent },
  {path: 'donate', component: MakeDonationComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
