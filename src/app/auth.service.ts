import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

    // private isloggedIn: boolean;
    private role:string | undefined;
    // private userName:string | undefined;
    
    constructor() { }


  public login(userInfo: IUser){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
//original
      // this.isloggedIn=false;
    // }

    // login() {
    //     this.isloggedIn=true;
    //     return of(this.isloggedIn);
    // }

    // isUserLoggedIn(): boolean {
    //     return this.isloggedIn;
    //}
    

    // isAdminUser():boolean {
    //   if (this.role=='admin') {
    //       return true; 
    //   }
    //   return false;
    // }


    // logoutUser(): void{
    //   alert('You are logged out.');
    //   this.isloggedIn = false;
    // }

//}
