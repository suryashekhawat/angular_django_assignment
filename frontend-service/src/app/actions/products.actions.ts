import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ProductsModel } from './../models/products.model'


export const ADD_PRODUCT = 'ADD PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE PRODUCT'


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

export type Actions = AddProduct | RemoveProduct | UpdateProduct
