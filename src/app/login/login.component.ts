import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthguardService } from '../auth.service';
import { RegisterUserService } from '../register-user.service';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RegisterUserService, ShareddataService]
})
export class LoginComponent implements OnInit {

  register: any; 
  input: any;
  donations:any;

  invalidCredentialMsg: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retUrl: string | null="users";
  
  constructor(private authService: AuthguardService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute,
              private registerUserService: RegisterUserService,
              private sharingService: ShareddataService) {}

  ngOnInit() {
    this.sharingService.setData(this.input);
    this.register = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role: ''
    };

    this.input = {
      username: '',
      password: '',
    }

  } 

  registerUser(){
    this.registerUserService.registerNewUser(this.register).subscribe(
      response => {
        console.log(response);
        alert('User ' + this.register.first_name + ' has been created!');
      },
      error => console.log('error', error)
    );
  }

  loginUser(){
    // this.registerUserService.loginUser(this.input).subscribe(
      console.log("THIS IS DATA")
      this.sharingService.setData("hello")
  
  
  
      this.registerUserService.loginUser(this.input).subscribe(

      response => {
        this.authService.login();
        this.router.navigate( [this.retUrl]);
        alert('You succesfully Loged in!')
      },
      
      error => {
        alert('Wrong Credentials!');
        this.router.navigate( ['login']);
      }
    
    );
  }


  // onFormSubmit(loginForm: any) {
  //   this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(

  //   data => {

  //         if (this.retUrl!=null) {
  //             this.router.navigate( [this.retUrl]);
  //         } else {  
  //             this.router.navigate( ['login']);
  //         }
          
  //   });
  // }

}
