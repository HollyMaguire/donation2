import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MakeDonationService } from '../make-donation.service';
import { ActivatedRoute } from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DonationService } from '../donation.service';
import { ShareddataService } from '../shareddata.service';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
    giftFill = new FormControl('');
    public amount = new FormControl("");
    public userId : any;
    public donationId : any;

    public makeDonationData: any;
    public errorMsg: any;
    name: string | null | undefined;
  
    constructor(private http:HttpClient, 
      private dataService: MakeDonationService, 
      private route: ActivatedRoute, 
      private donationService: DonationService, 
      private sharingService: ShareddataService,
      ) { }
  
    ngOnInit(): void {
      
      this.name = this.route.snapshot.paramMap.get("name")
      this.dataService.getDonationType().subscribe(
        (data:any) => {this.makeDonationData = data; console.log(data)},
        (error:any) => this.errorMsg = error,
        () => console.log("Completed"))


       
    }
    addDonation(){
    //       {
    //     "user_name": "dJane",
    //     "donation_type": "memorial gift",
    //     "amount": 123123,
    //     "donationType": 5,
    //     "userName": 30
    // }

    this.userId = this.sharingService.getData()
    this.donationId = this.sharingService.getDonation_id()

    let vals = { userName: this.userId , "donationType": this.donationId, amount: this.amount.value}
      console.log(vals)
      this.donationService.addDonation(vals).subscribe(
        data => {
          alert(data.toString());
      });
    }
  }