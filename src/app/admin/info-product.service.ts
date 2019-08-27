import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './info.product';

@Injectable({
  providedIn: 'root'
})
export class InfoProductService {
  private _url:string = "https://esh-poc.firebaseio.com/customers.json"
  constructor(private http:HttpClient) { }
  getInfoProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }
}
