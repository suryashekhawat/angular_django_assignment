import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApputilsService} from './apputils.service';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl = "http://localhost:5800"
  public isLoggedIn = false;
  constructor(
    private http: HttpClient,
    public apputils: ApputilsService,
    public router:Router
  ) {
    let authState = this.getAuthState();
    if (authState){
      console.log(authState)
      this.router.navigate(['/products']);
    }else{
      this.router.navigate(['/login']);
    }
  }

  getlogin(user){
    return this.http.post(this.baseUrl+"/api/token/", user)
  }

  getAccessTokenUsingRefreshToken(token){
    return this.http.post(this.baseUrl+"/api/token/refresh/", token)
  }

  setAuthState(authState){
    this.apputils.setLocalStorage('isAuthenticated', authState);
  }
  getAuthState(){
    return this.apputils.getLocalStorage('isAuthenticated')
  }

  isAllowedToView(){
    if (this.getAuthState()){
      console.log('no issues')
    }else{
      this.router.navigate(['/login']);
    }
  }
  logout(){
    this.apputils.removeLocalStorage('isAuthenticated');
    this.apputils.removeLocalStorage('refreshToken');
    this.apputils.removeLocalStorage('accessToken');
    this.router.navigate(['/login']);
  }
  getClientAccessToken(){
    let refreshToken = this.apputils.getLocalStorage('refreshToken');
    return this.getAccessTokenUsingRefreshToken({refresh: refreshToken })
  }
}
