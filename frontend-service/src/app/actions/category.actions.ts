import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CategoryModel } from './../models/category.model'


export const ADD_CATEGORY = 'ADD CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE CATEGORY'
export const REFRESH_CATEGORY_LIST = 'REFRESH_CATEGORY_LIST'


export class RefreshCategoryList implements Action {
  readonly type = REFRESH_CATEGORY_LIST
  constructor(public payload: CategoryModel) { }
}

export class AddCategory implements Action {
  readonly type = ADD_CATEGORY
  constructor(public payload: CategoryModel) { }
}

export class RemoveCategory implements Action {
  readonly type = REMOVE_CATEGORY
  constructor(public payload: CategoryModel) { }
}

export class UpdateCategory implements Action {
  readonly type  = UPDATE_CATEGORY
  constructor(public payload: CategoryModel) { }
}

export type Actions = AddCategory | RemoveCategory | UpdateCategory | RefreshCategoryList
