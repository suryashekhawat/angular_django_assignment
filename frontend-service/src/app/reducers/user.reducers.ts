import { Action } from '@ngrx/store';
import { UserModel } from './../models/user.model';
import * as UserActions from './../actions/user.actions';


const initialState: UserModel = {
  isLoggedIn: false,
  username: 'Guest',
  accessToken: '',
  refreshToken: ''
}

export function userreducer(
  state: UserModel[]= [initialState],
  action: UserActions.Actions
) {
  switch (action.type) {
    case UserActions.SET_REFRESH_TOKEN:
      console.log('setting refresh token')
      console.log(action.payload, state);
      state[0].refreshToken = action.payload.refreshToken;
      return [...state, action.payload]
    case UserActions.SET_ACCESS_TOKEN:
      console.log('setting access token')
      console.log(action.payload, state);
      state[0].accessToken = action.payload.accessToken;
      return [...state, action.payload]
    case UserActions.SET_USERNAME:
      console.log('setting username')
      console.log(action.payload, state);
      state[0].username = action.payload.username;
      return [...state, action.payload]
    case UserActions.SET_LOGGED_IN_STATE:
      console.log('setting logged in state')
      console.log(action.payload, state);
      state[0].isLoggedIn = action.payload.isLoggedIn;
      return [...state, action.payload]
    default:
      return state;
  }
}
