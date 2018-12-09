import { Action } from '@ngrx/store';
import { ProductsModel } from './../models/products.model'
import * as ProductActions from './../actions/products.actions'

const initialState: ProductsModel = {
  product_id: 'PRODUCT_ID',
  name: 'PRODUCT_NAME',
  price: 'PRICE',
  category: 'CATEGORY'
}

export function reducer(
  state: ProductsModel[] = [initialState],
  action: ProductActions.Actions
) {
  switch(action.type){
    case ProductActions.ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
