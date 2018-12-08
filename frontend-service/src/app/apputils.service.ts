import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApputilsService {

  constructor() { }

  setLocalStorage(key, val){
    localStorage.setItem(key, val);
  }

  getLocalStorage(key){
    return localStorage.getItem(key);
  }

  removeLocalStorage(key){
    localStorage.removeItem(key);
  }
}
