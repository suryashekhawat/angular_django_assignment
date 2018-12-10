import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { UserModel } from './../models/user.model'

export const SET_LOGGED_IN_STATE = 'SET_LOGGED_IN_STATE';
export const SET_USERNAME = 'SET_USERNAME'
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN'

export class SetUsername implements Action {
  readonly type = SET_USERNAME
  constructor(public payload: UserModel) { }
}

export class SetAccessToken implements Action {
  readonly type = SET_ACCESS_TOKEN
  constructor(public payload: UserModel) { }
}

export class SetRefreshToken implements Action {
  readonly type = SET_REFRESH_TOKEN
  constructor(public payload: UserModel) { }
}

export class SetIsLoggedInState implements Action {
  readonly type = SET_LOGGED_IN_STATE
  constructor(public payload: UserModel) { }
}
export type Actions = SetIsLoggedInState | SetRefreshToken | SetAccessToken | SetUsername
