import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ProductsModel } from './../models/products.model'


export const ADD_PRODUCT = 'ADD PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE PRODUCT'
export const REFRESH_PRODUCT_LIST = 'REFRESH_PRODUCT_LIST'

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT
  constructor(public payload: ProductsModel) { }
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT
  constructor(public payload: ProductsModel) { }
}

export class UpdateProduct implements Action {
  readonly type  = UPDATE_PRODUCT
  constructor(public payload: ProductsModel) { }
}
export class RefreshProductsList implements Action {
  readonly type  = REFRESH_PRODUCT_LIST
  constructor(public payload:any) { }
}

export type Actions = AddProduct | RemoveProduct | UpdateProduct | RefreshProductsList
