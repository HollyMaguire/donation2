import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DonationService } from '../donation.service';
import { ShareddataService } from '../shareddata.service';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
    selector: 'app-info-form',
    templateUrl: './info-form.component.html',
    styleUrls: ['./info-form.component.css'],
    
  })
  export class InfoFormComponent implements OnInit {
    exform!: FormGroup;

    public formFill = new FormControl('');
    public userdata: any;
    public errorMsg: any;
    public firstName: any;
    public lastName: any ;
    userId: any;
    user_id: any;
    donations:any;

    constructor(private donationService: DonationService, 
      private sharingService: ShareddataService, private userService: UserService) { }
      @Input() dep:any;
  public id:string | undefined;
  public username: string | undefined;
  public first_name: string | undefined;
  public last_name: any;
  public email:any;

  ngOnInit(): void {
    this.id = this.id;
    this.email = this.email;
    this.first_name = this.first_name;
    this.exform = new FormGroup({
      'validation_userId' : new FormControl(null, Validators.required),
      'validation_firstName' : new FormControl(null, Validators.required),
      'validation_lastName' : new FormControl(null, Validators.required),
      'validation_email' : new FormControl(null, Validators.required),
    });
  }
  AddDonation(test_Id:any){
    console.log("USER ID:  " + this.user_id)
    this.sharingService.setData(this.user_id);
  }

}