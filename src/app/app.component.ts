import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgoDonations';

  constructor (private authService:AuthguardService, 
    private router:Router) {
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
    this.router.navigateByUrl('/login');
  }

}

  // logout() {
  //   this.authService.logoutUser();
  //   this.router.navigate(['login']);
  // }

  
