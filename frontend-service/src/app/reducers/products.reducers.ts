import { Action } from '@ngrx/store';
import { ProductsModel } from './../models/products.model';
import * as ProductActions from './../actions/products.actions';


const initialState: ProductsModel = {
  product_id: 'PRODUCT_ID',
  name: 'PRODUCT_NAME',
  price: 'PRICE',
  category: 'CATEGORY'
}

export function productreducer(
  state: ProductsModel[] = [initialState],
  action: ProductActions.Actions
) {
  switch(action.type){
    case ProductActions.REFRESH_PRODUCT_LIST:
      console.log('Reffreshing products list with new state : [PRODUCT_LIST_REFRESH]', state)
      console.log('product refresh payload', action.payload)
      let payload = action.payload
      payload.forEach(function(val, i){
        val['editRequired'] = false;
      });
      state = payload
      console.log('after refresh new state : [AFTER REFRESH STATE]', state);
      return [...state]
    case ProductActions.ADD_PRODUCT:
      console.log('adding new product : ', action.payload);
      console.log('current product state [ADD]: ', state);
      return [...state, action.payload];
    case ProductActions.REMOVE_PRODUCT:
      console.log('remove payload : ', action.payload)
      console.log('[remove curr state : ]', state)
      state.forEach(function(val, i){
        if (val['product_id']==action.payload['product_id']){
          state.splice(i,1);
          console.log('new splice state : ', state);
        }
      })
      console.log('current product state [REMOVE]: ', state);
      return [...state];
    case ProductActions.UPDATE_PRODUCT:
      console.log('current product state [UPDATE]: ', state);
      state.forEach(function(val, i){
        if (val['product_id']==action.payload['product_id']){
          state[i].name = action.payload['name'];
          state[i].price = action.payload['price'];
          state[i].category = action.payload['category'];

          console.log('new update state product: ', state);
          state[i]['editRequired'] = false;
        }
      })
      return [...state];
    default:
      return state;
  }
}
