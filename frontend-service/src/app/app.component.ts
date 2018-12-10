import { Component } from '@angular/core';
import {ApputilsService} from './apputils.service';
import {AuthService} from './auth.service'
import {Store} from '@ngrx/store';
import {UserModel} from './models/user.model'
import { Observable } from 'rxjs';
import {AppState} from './app.state'
import * as UserActions from './actions/user.actions'
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend-service'
  guest: String = 'guest'
  userStateObservable: Observable<UserModel[]>
  isLoggedIn: Boolean = false
  constructor(
    public apputils: ApputilsService,
    public auth: AuthService,
    private store: Store<AppState>,
    public router: Router,
  ){
    this.userStateObservable = store.select('user');
    console.log('user state : ', this.userStateObservable)
    this.userStateObservable.subscribe((user)=>{
      console.log('userobservable data', user)
      this.isLoggedIn = user[0].isLoggedIn;
      this.guest = user[0].username;
      if(!this.isLoggedIn){
        this.router.navigate(['/login']);
      }
    })
    // this.isLoggedIn = (this.auth.getAuthState()==="true");
  }
  logout(){
    this.store.dispatch(new UserActions.SetIsLoggedInState({isLoggedIn: false}))
    this.store.dispatch(new UserActions.SetUsername({username: 'Guest'}))

    this.auth.logout();
  }
}
