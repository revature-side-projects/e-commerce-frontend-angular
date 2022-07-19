import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileUrl='http:localhost:3306/profile'
  constructor(private http: HttpClient) { }

  public getProfileById(id:number):Observable<User>{
    return this.http.get<User>(`${this.profileUrl}/${id}`);

}

  public updateProfile(user: User){
    return this.http.put<User>(`${this.profileUrl}/update`, user);

  }
}