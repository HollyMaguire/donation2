import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private _url: string = "http://127.0.0.1:8000"

  constructor(private http: HttpClient){ }



  
  getUserList(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url + "/users/")
  }

  addUser(args:any){
    return this.http.post(this._url + "/users/", args)
  }
  
  updateUser(args:any){
  return this.http.put(this._url + "/users/", args)
  }

  deleteUser(args:any){
    return this.http.delete(this._url + "/users/" + args + "/")
  }





  
  getUser(id: any): Observable<IUser[]>{
  return this.http.get<IUser[]>("http://127.0.0.1:8000/user_details/" + id + "/")
  }

   errorHandler(error: HttpErrorResponse){
     return throwError(error.message || "Server Error")
  }

}


