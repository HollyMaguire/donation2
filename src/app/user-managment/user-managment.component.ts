import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
  providers: [UserService],
})
export class UserManagmentComponent implements OnInit {
    public userdata: any;
    public errorMsg: any;
    public singleuserdata: any;

    ModalTitle!: string;
    ActivateEdit: boolean = false;
    dep: any;

    constructor(private userService: UserService) { }


  addClick(){
    this.dep = {
      id: 0,
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateEdit = true;
  }

  editClick(user: any){
    console.log(user)
    this.dep = user;
    this.ModalTitle = "Edit Department";
    this.ActivateEdit = true;
  }

  closeClick(){
    this.ActivateEdit = false;
    this.refreshUserList();
  }

  deleteClick(user:any){
    console.log(user.id)
    if (confirm("Are you sure?")){
      this.userService.deleteUser(user.id).subscribe(
        data => {
          this.refreshUserList();
        }
      )
    }
  }


  refreshUserList(){
      this.userService.getUserList().subscribe(
        (data:any) => {this.userdata = data})
  };


  ngOnInit(): void {
        this.userService.getUserList().subscribe(
         (data:any) => {this.userdata = data; console.log(data)},
         (error:any) => this.errorMsg = error,
         () => console.log("Completed"))
  } 

  user_clicked = (id: any) => {
    this.userService.getUser(id).subscribe(
      (data:any) => {this.userdata = data; console.log(data)},
      (error:any) => this.errorMsg = error,
    )
  }
  
}  

