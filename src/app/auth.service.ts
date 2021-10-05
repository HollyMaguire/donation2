import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

    private isloggedIn: boolean;
    private role:string | undefined;
    private userName:string | undefined;
    
    constructor() {
      this.isloggedIn=false;
    }

    login() {
        this.isloggedIn=true;
        return of(this.isloggedIn);
    }

    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
    

    // isAdminUser():boolean {
    //   if (this.role=='admin') {
    //       return true; 
    //   }
    //   return false;
    // }


    logoutUser(): void{
      alert('You are logged out.');
      this.isloggedIn = false;
    }

}
