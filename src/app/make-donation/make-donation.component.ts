import { Component, OnInit } from '@angular/core';
import { MakeDonationService } from '../make-donation.service';

@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
  public makeDonationData: any;
  public errorMsg: any;
  constructor(private dataService: MakeDonationService) { }

  ngOnInit(): void {
    this.dataService.getDonationType().subscribe(
      (data:any) => {this.makeDonationData = data; console.log(data)},
      (error:any) => this.errorMsg = error,
      () => console.log("Completed"))
  }

}

