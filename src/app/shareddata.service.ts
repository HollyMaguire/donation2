import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  transfer_data: any;

  constructor() { }

  setData(data:any){
    this.transfer_data=data;
  }

  getData(){
    return this.transfer_data;
  }

}