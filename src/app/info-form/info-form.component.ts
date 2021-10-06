import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DonationService } from '../donation.service';
import { ShareddataService } from '../shareddata.service';
import { UserService } from '../user.service';

@Component({
    selector: 'app-info-form',
    templateUrl: './info-form.component.html',
    styleUrls: ['./info-form.component.css'],
    
  })
  export class InfoFormComponent implements OnInit {
    

    public firstName: any;
    public lastName: any ;
    userId: any;
    user_id: any;

    donations:any;

    constructor(private donationService: DonationService, 
      private sharingService: ShareddataService) { }



  ngOnInit(): void {

  }


  AddDonation(test_Id:any){
    console.log("USER ID:  " + this.user_id)
    this.sharingService.setData(this.user_id);
  }

}