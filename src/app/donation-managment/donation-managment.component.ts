import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';


@Component({
  selector: 'app-donation-managment',
  templateUrl: './donation-managment.component.html',
  styleUrls: ['./donation-managment.component.css']
})
export class DonationManagmentComponent implements OnInit {
    public donationdata: any;
    public errorMsg: any;
    constructor(private dataService: DonationService) { }
  
    ngOnInit( ): void { 
       this.dataService.getDonationData().subscribe(
         (data:any) => {this.donationdata = data; console.log(data)},
         (error:any) => this.errorMsg = error,
         () => console.log("Completed"))
       }

}