import { Address } from './../models/address';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
<<<<<<< HEAD

import { Observable } from 'rxjs';

=======
import { Observable } from "rxjs";
>>>>>>> 799f466a30ba20f59a16c25df68c42a1a71f767c

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addressUrl: string = `${environment.baseUrl}/api/addresses`;

  constructor(private http: HttpClient) { }

<<<<<<< HEAD


=======
>>>>>>> 799f466a30ba20f59a16c25df68c42a1a71f767c
  getUserAddresses(userId: number): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.addressUrl}/user/${userId}`, {
      headers: environment.headers,
    });
  }

<<<<<<< HEAD

  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.addressUrl}`, address, {
      headers: environment.headers,
    });
=======
  /**
   * 
   * @param {number} userId
   * @param {Address} address 
   * @returns {Observable<Address>} addresses
   */
  addAddress(address: Address, userId: number): Observable<Address> {
    return this.http
      .post<Address>(`${this.addressUrl}/${userId}`, address, { headers: environment.headers, })
>>>>>>> 799f466a30ba20f59a16c25df68c42a1a71f767c
  }

  updateAddress(address: Address): Observable<Address> {
    return this.http.put<Address>(`${this.addressUrl}`, address, {
      headers: environment.headers,

<<<<<<< HEAD
=======
  /**
   * 
   * @param {Address} address 
   * @param {number} userId 
   * @returns {Observable<Address>} address
   */
  updateAddress(address: Address, userId: number): Observable<Address> {
    return this.http.put<Address>(`${this.addressUrl}/${userId}`, address, {
      headers: environment.headers,
>>>>>>> 799f466a30ba20f59a16c25df68c42a1a71f767c
    });
  }
}
