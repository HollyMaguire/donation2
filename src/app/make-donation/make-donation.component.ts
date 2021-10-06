import { Component, OnInit } from '@angular/core';
import { MakeDonationService } from '../make-donation.service';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
  public makeDonationData: any;
  public errorMsg: any;
  constructor(private dataService: MakeDonationService,
              private dataDonationId: ShareddataService) { }

  ngOnInit(): void {
    this.dataService.getDonationType().subscribe(
      (data:any) => {this.makeDonationData = data; console.log(data)},
      (error:any) => this.errorMsg = error,
      () => console.log("Completed"))
  }

  
  getDonationClick(donation:any){
    this.dataDonationId.setDonation_id(donation)
    console.log("DONATION TYPE: " + donation)
  }
}

