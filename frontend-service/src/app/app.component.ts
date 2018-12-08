import { Component } from '@angular/core';
import {ApputilsService} from './apputils.service';
import {AuthService} from './auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend-service'
  guest = 'guest'
  isLoggedIn = false
  constructor(
    public apputils: ApputilsService,
    public auth: AuthService
  ){
    this.isLoggedIn = (this.auth.getAuthState()==="true");
  }
  logout(){
    this.auth.logout();
  }
}
