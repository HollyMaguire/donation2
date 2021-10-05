import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ImakeDonation } from './make-donation.model';

@Injectable({
  providedIn: 'root'
})
export class MakeDonationService {

  private _url: string = "http://127.0.0.1:8000/Donation/"
  constructor(private http: HttpClient){ }


  getDonationType(): Observable<ImakeDonation[]>{
    return this.http.get<ImakeDonation[]>(this._url)
  }
   errorHandler(error: HttpErrorResponse){
     return throwError(error.message || "Server Error")
  }


}



