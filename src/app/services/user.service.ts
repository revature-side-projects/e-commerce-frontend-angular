import { environment } from './../../environments/environment';
import { Address } from './../models/address';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // userUrl: string = url + `/users`;
  userUrl: string = `http://localhost:8080/api` + `/users`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.userUrl, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findUserById(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findUserByUsername(username: string): Observable<User> {
    return this.http
      .get<User>(`${this.userUrl}/${username}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  registerUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.userUrl}`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(`${this.userUrl}`, user, {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      })
      .pipe(catchError(this.handleError));
  }

  deleteUserById(id: number): Observable<any> {
    return this.http
      .delete<User>(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // getMyPurchases(id: number): Observable<Purchase[]>{
  //   return this.http.get<Purchase[]>(`${this.userUrl}/${id}/myPurchases`, this.httpOptions)
  //    .pipe(catchError(this.handleError));
  // }

  // deleteFromMyPurchasesById(id: number): Observable<any>{
  //   return this.http.delete<Purchase>(`${this.userUrl}/${id}`, this.httpOptions)
  //    .pipe(catchError(this.handleError));
  // }

  // getMyReviews(id: number): Observable<Review[]>{
  //   return this.http.get<Review[]>(`${this.userUrl}/${id}/myReviews`, this.httpOptions)
  //    .pipe(catchError(this.handleError));
  // }

  // deleteFromMyReviewsById(id: number): Observable<any>{
  //   return this.http.delete<Review>(`${this.userUrl}/${id}`, this.httpOptions)
  //    .pipe(catchError(this.handleError));
  // }

  getMyAddresses(id: number): Observable<Address[]> {
    return this.http
      .get<Address[]>(`${this.userUrl}/${id}/myAddresses`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteFromMyAddressesById(id: number): Observable<any> {
    return this.http
      .delete<Address>(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error has occured: ', httpError.error.message);
    } else {
      console.error(`
      Backend returned code ${httpError.status}
      with body: ${httpError.error}`);
    }

    return throwError(() => new Error('something went wrong'));
  }
}
