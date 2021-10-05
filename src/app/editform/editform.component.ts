import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  
  exform!: FormGroup;

  public formFill = new FormControl('');
  public userdata: any;
  public errorMsg: any;

  constructor(private userService: UserService) { }

  @Input() dep:any;
  public id:string | undefined;
  public username: string | undefined;
  public first_name: string | undefined;
  public last_name: any;
  public email: any;
  public password: any;
  public role: any;
  
  ngOnInit(): void {
    this.id = this.dep.id;
    this.username = this.dep.username;
    this.first_name = this.dep.first_name;
    this.last_name = this.dep.last_name;
    this.email = this.dep.email;
    this.password = this.dep.password;
    this.role = this.dep.role;
   
    this.exform = new FormGroup({
      'validation_username' : new FormControl(null, Validators.required),
      'validation_name' : new FormControl(null, Validators.required),
      'validation_last' : new FormControl(null, Validators.required),
      'validation_email' : new FormControl(null, [Validators.required, Validators.email]),
      'validation_password' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'validation_role' : new FormControl('admin', Validators.required),
    });
  }

  AddUser(){
    var val = {id: this.id,
               username: this.username,
               first_name: this.first_name,
               last_name: this.last_name,
               email: this.email,
               password: this.password,
               role: this.role,
              };
    console.log(val)
    this.userService.addUser(val).subscribe(
      data => {
        alert(data.toString());
    });
  }

  // get first_name(){
  //   return null
  // }



  UpdateUser(){
    var val = {id: this.id,
      username: this.username,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      role: this.role,
     };
    console.log(val)
    this.userService.updateUser(val).subscribe(
    data => {
    alert(data.toString());
    });
  }

}