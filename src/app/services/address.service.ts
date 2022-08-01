import { Address } from './../models/address';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addressUrl: string = `${environment.baseUrl}/api/addresses`;

  constructor(private http: HttpClient) {}

  getUserAddresses(userId: number):Observable<Address[]> {
    return this.http.get<Address[]>(`${this.addressUrl}/${userId}`, {
      headers: environment.headers,
    });
  }

  addAddress(address: Address, userId:number):Observable<Address>{
    return this.http
      .post<Address>(`${this.addressUrl}/${userId}`, address, {headers: environment.headers,})
  }


  updateAddress(address: Address, userId:number):Observable<Address> {
    return this.http.put<Address>(`${this.addressUrl}/${userId}`, address, {headers: environment.headers,
    });
  }
}
