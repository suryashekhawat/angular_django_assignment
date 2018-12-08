import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApputilsService } from './apputils.service';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = "http://localhost:8000"
  constructor(
    public http: HttpClient,
    public auth: AuthService,
    public apputils: ApputilsService
  ) {
    console.log(this.auth.getClientAccessToken());
  }

  getAllCategories() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
        })
      };
    return this.http.get(this.baseUrl + '/category/', httpOptions)
  }
  addNewCategory(category){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.post(this.baseUrl + '/category/', category, httpOptions)
  }
  addNewProduct(product){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.post(this.baseUrl + '/products/', product, httpOptions)
  }
  getAllProducts() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
        })
      };
    return this.http.get(this.baseUrl + '/products/', httpOptions)
  }
  removeCategory(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.delete(this.baseUrl + '/category/'+id, httpOptions)
  }
  removeProduct(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.delete(this.baseUrl + '/products/'+id, httpOptions)
  }

  updateProduct(id, data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.put(this.baseUrl + '/products/'+id+'/', data,  httpOptions)
  }

  updateCategory(id, data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.put(this.baseUrl + '/category/'+id+'/', data,  httpOptions)
  }
}
