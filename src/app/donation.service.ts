import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IDonation } from './donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private _url: string = "http://127.0.0.1:8000/DonationsManagement/"

  constructor(private http: HttpClient){ }

  getDonationData(): Observable<IDonation[]>{
    return this.http.get<IDonation[]>(this._url)

   }

   addDonation(args:any){
    return this.http.post(this._url, args)
  }

   errorHandler(error: HttpErrorResponse){
     return throwError(error.message || "Server Error")
}
}