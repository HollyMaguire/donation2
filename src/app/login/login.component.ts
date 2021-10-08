import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.model';
import { AuthguardService } from '../auth.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
 })
export class LoginComponent implements OnInit {
constructor(private authService: AuthguardService, private router: Router, private formBuilder: FormBuilder ) { }
  
  loginForm!: FormGroup
isSubmitted  =  false;


  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get formControls() { return this.loginForm.controls; }

login(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
  this.authService.login(this.loginForm.value);
  this.router.navigateByUrl('/admin');
  
}
logout(){
  this.authService.logout();
  this.router.navigate(['login']);
  this.router.navigateByUrl('/login');
}

}


//   invalidCredentialMsg: string | undefined;
//   username: string | undefined;
//   password: string | undefined;
//   retUrl: string | null="users";
  
//   constructor(private authService: AuthguardService, 
//               private router: Router, 
//               private activatedRoute: ActivatedRoute,
//               private registerUserService: RegisterUserService,
//               private sharingService: ShareddataService) {}

//   ngOnInit() {
//     this.sharingService.setData(this.input);
//     this.register = {
//       username: '',
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: '',
//       role: ''
//     };

//     this.input = {
//       username: '',
//       password: '',
//     }

//   } 

//   registerUser(){
//     this.registerUserService.registerNewUser(this.register).subscribe(
//       response => {
//         console.log(response);
//         alert('User ' + this.register.first_name + ' has been created!');
//       },
//       error => console.log('error', error)
//     );
//   }

//   loginUser(){
  
  
//       this.registerUserService.loginUser(this.input).subscribe(

//       response => {
//         this.authService.login();
//         this.router.navigate( [this.retUrl]);
//         alert('You succesfully Loged in!')
//       },
      
//       error => {
//         alert('Wrong Credentials!');
//         this.router.navigate( ['login']);
//       }
    
//     );
//   }


// }























//Original

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthguardService } from '../auth.service';
// import { RegisterUserService } from '../register-user.service';
// import { ShareddataService } from '../shareddata.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
  
// })
// export class LoginComponent implements OnInit {

//   register: any; 
//   input: any;
//   donations:any;

//   invalidCredentialMsg: string | undefined;
//   username: string | undefined;
//   password: string | undefined;
//   retUrl: string | null="users";
  
//   constructor(private authService: AuthguardService, 
//               private router: Router, 
//               private activatedRoute: ActivatedRoute,
//               private registerUserService: RegisterUserService,
//               private sharingService: ShareddataService) {}

//   ngOnInit() {
//     this.sharingService.setData(this.input);
//     this.register = {
//       username: '',
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: '',
//       role: ''
//     };

//     this.input = {
//       username: '',
//       password: '',
//     }

//   } 

//   registerUser(){
//     this.registerUserService.registerNewUser(this.register).subscribe(
//       response => {
//         console.log(response);
//         alert('User ' + this.register.first_name + ' has been created!');
//       },
//       error => console.log('error', error)
//     );
//   }

//   loginUser(){
  
  
//       this.registerUserService.loginUser(this.input).subscribe(

//       response => {
//         this.authService.login();
//         this.router.navigate( [this.retUrl]);
//         alert('You succesfully Loged in!')
//       },
      
//       error => {
//         alert('Wrong Credentials!');
//         this.router.navigate( ['login']);
//       }
    
//     );
//   }


// }














