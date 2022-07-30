import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  constructor(private http : HttpClient) { }

  pushFile(file: File): Observable<string> { //: Observable<HttpEvent<{}>>
    const data: FormData = new FormData();
    const headers: HttpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:4200'});
    console.log(headers);
    data.append('file', file);
    console.log(data.get("file"));

    return this.http.put(`${environment.baseUrl}/api/product/uploadFile`, data, {headers: environment.headers,
      withCredentials: environment.withCredentials,
      reportProgress: true,
      responseType: 'text'});
  }
}
