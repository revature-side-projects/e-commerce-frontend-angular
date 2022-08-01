import { Purchase } from '../models/purchase';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private purchaseUrl: string = environment.baseUrl + '/api/purchases' ;

  constructor(private http: HttpClient) {}

  public getAllPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.purchaseUrl, {
      headers: environment.headers,
    });
  }

  public getUserPurchases(userId: number): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
        this.purchaseUrl + `/user/${userId}`,
      {
        headers: environment.headers,
      }
    );
  }
}
