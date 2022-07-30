import { Address } from './../models/address';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addressUrl: string = `${environment.baseUrl}/api/addresses`;

  constructor(private http: HttpClient) {}

  getUserAddresses(userId: number) {
    return this.http.get(`${this.addressUrl}/user/${userId}`, {
      headers: environment.headers,
    });
  }

  addAddress(address: Address) {
    return this.http.post(`${this.addressUrl}`, address, {
      headers: environment.headers,
    });
  }

  updateAddress(address: Address) {
    return this.http.put(`${this.addressUrl}`, address, {
      headers: environment.headers,
    });
  }
}
