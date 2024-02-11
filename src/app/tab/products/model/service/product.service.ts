import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient

  ) { }
  getList(){
    const api=this.apiUrl + 'products/getlist';
    return this.httpClient.get(api);
  }
}
