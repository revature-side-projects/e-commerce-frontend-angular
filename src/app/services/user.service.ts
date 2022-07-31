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
  userUrl: string = environment.baseUrl + `/users`;

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
