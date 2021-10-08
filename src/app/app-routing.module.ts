import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';
import { GiftsComponent } from './gifts/gifts.component';
import { DonationManagmentComponent} from './donation-managment/donation-managment.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AuthguardService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserGuard } from './user.guard';
import { EditformComponent } from './editform/editform.component';
import { RedirectComponent } from './redirect/redirect.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'infoForm', component: InfoFormComponent, canActivate:[UserGuard]},
  {path: 'gift', component: GiftsComponent, canActivate:[UserGuard]},
  {path:'users', component: UserManagmentComponent, canActivate:[UserGuard]},
  {path: '', component: DonationManagmentComponent, canActivate:[UserGuard]},
  {path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [UserGuard] },
  {path: 'edit/:user_id', component: EditformComponent, canActivate:[UserGuard]},
  {path: 'edit', component: EditformComponent, canActivate:[UserGuard]},
  {path: 'thanks', component: RedirectComponent, canActivate:[UserGuard] },
  {path: 'donate', component: MakeDonationComponent, canActivate:[UserGuard]},
  {path: 'register', component: RegisterComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
