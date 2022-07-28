import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

interface Cart {
  cartCount: number;
  products: {
    product: Product;
    quantity: number;
  }[];
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
<<<<<<< HEAD
  private productUrl: string = '/api/product';
  private purchasesUrl: string = '/api/purchases';
=======

  private productUrl: string = "/api/product";

  private searchTerm:  string = '';
  private purchasesUrl: string = "/api/purchases";
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab


  private _cart = new BehaviorSubject<Cart>({
    cartCount: 0,
    products: [],
    totalPrice: 0.0,
  });

  private _cart$ = this._cart.asObservable();

  getCart(): Observable<Cart> {
    return this._cart$;
  }

  setCart(latestValue: Cart) {
    return this._cart.next(latestValue);
  }

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl + this.productUrl, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

  //maybe remove the ending headers if error?
  public getSearchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + this.productUrl + `/partial-search/${searchTerm}`,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  public getSingleProduct(id: number): Observable<Product> {
<<<<<<< HEAD
    return this.http.get<Product>(
      environment.baseUrl + this.productUrl + '/' + id,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
=======
    return this.http.get<Product>(environment.baseUrl+id);
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
  }

  public createProduct(
    name: string,
    quantity: number,
    description: string,
    price: number,
    image: string
  ): Observable<any> {
    const payload = {
      name: name,
      quantity: quantity,
      description: description,
      image: 'https://revazon-image-bucket.s3.amazonaws.com/' + image,
      price: price,
    };
    return this.http.put<any>(
      environment.baseUrl + this.productUrl + '/create-update',
      payload,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  public updateProduct(
    id: number,
    name: string,
    quantity: number,
    description: string,
    price: number,
    image: string
  ): Observable<any> {
    const payload = {
      id: id,
      name: name,
      quantity: quantity,
      description: description,
      image: 'https://revazon-image-bucket.s3.amazonaws.com/' + image,
      price: price,
    };
    return this.http.put<any>(
      environment.baseUrl + this.productUrl + '/create-update',
      payload,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  public purchase(
    products: { id: number; quantity: number }[]
  ): Observable<any> {
    const payload = JSON.stringify(products);
<<<<<<< HEAD
    return this.http.patch<any>(
      environment.baseUrl + this.productUrl,
      payload,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
=======
    return this.http.patch<any>(environment.baseUrl+this.productUrl, payload, {headers: environment.headers, withCredentials: environment.withCredentials})
  }

  public createProduct(name : string, quantity : number, description : string, price : number, image : string): Observable<any> {
    const payload = {name: name, quantity: quantity, description: description, image: 'https://revazon-image-bucket.s3.amazonaws.com/' + image, price: price}
    return this.http.put<any>(environment.baseUrl+this.productUrl+'/create-update',payload,{headers: environment.headers, withCredentials: environment.withCredentials})                                                   
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab
  }

  public addPurchase(
    products: { id: number; quantity: number }[]
  ): Observable<any> {
    const payload = JSON.stringify(products);
    return this.http.post<any>(
      environment.baseUrl + this.purchasesUrl,
      payload,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }
  public deleteProduct(id: number) {
    return this.http.delete<any>(
      environment.baseUrl + this.productUrl + '/' + id,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

}
