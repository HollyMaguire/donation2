import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  transfer_data: any;
  transfer_donation: any;

  constructor() { }

  setData(data:any){
    this.transfer_data=data;
  }

  getData(){
    return this.transfer_data;
  }

  setDonation_id(data:any){
    this.transfer_donation=data;
    console.log("SET DATA FOR DONATION: " + this.transfer_donation)
  }

  getDonation_id(){
    return this.transfer_donation;
  }

}