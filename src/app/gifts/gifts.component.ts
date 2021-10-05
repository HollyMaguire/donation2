import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MakeDonationService } from '../make-donation.service';
import { ActivatedRoute } from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  giftFill = new FormControl('');
  public amount = new FormControl("");
    public makeDonationData: any;
    public errorMsg: any;
    name: string | null | undefined;
  
    constructor(private http:HttpClient, private dataService: MakeDonationService, private route: ActivatedRoute, private donationService: DonationService) { }
  
    ngOnInit(): void {
      this.name = this.route.snapshot.paramMap.get("name")
      this.dataService.getDonationType().subscribe(
        (data:any) => {this.makeDonationData = data; console.log(data)},
        (error:any) => this.errorMsg = error,
        () => console.log("Completed"))
       
    }
    addDonation(){
      let vals = { user_name: this.name, userName: 3, donationType: 3, amount: this.amount.value}
      console.log(vals)
      this.donationService.addDonation(vals).subscribe(
        data => {
          alert(data.toString());
      });
    }
  }