import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApputilsService } from './apputils.service';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = "http://localhost:5500"
  baseUrlCat_server = "http://localhost:5800"
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
    return this.http.get(this.baseUrlCat_server + '/category/', httpOptions)
  }
  addNewCategory(category){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apputils.getLocalStorage('accessToken')
      })
    };
  return this.http.post(this.baseUrlCat_server + '/category/', category, httpOptions)
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
  return this.http.delete(this.baseUrlCat_server + '/category/'+id, httpOptions)
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
  return this.http.put(this.baseUrlCat_server + '/category/'+id+'/', data,  httpOptions)
  }
}
