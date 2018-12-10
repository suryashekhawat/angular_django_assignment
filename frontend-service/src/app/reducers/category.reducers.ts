import { Action } from '@ngrx/store';
import { CategoryModel } from './../models/category.model';
import * as CategoryActions from './../actions/category.actions';


const initialState: CategoryModel = {
  id: 'CATEGORY ID',
  type: 'CATEGORY TYPE'
}

export function categoryreducer(
  state: CategoryModel[] = [initialState],
  action: CategoryActions.Actions
) {
  switch(action.type){
    case CategoryActions.REFRESH_CATEGORY_LIST:
      let payload: any = action.payload;
      payload.forEach(function(val, i){
        val['editRequired'] = false;
      })
      state = payload;

      return [...state];
    case CategoryActions.ADD_CATEGORY:
      console.log('adding new category : ', action.payload);

      return [...state, action.payload];
    case CategoryActions.REMOVE_CATEGORY:
      console.log('remove payload : ', action.payload)
      state.forEach(function(val, i){
        if (val.id == action.payload['id']){
          state.splice(i,1);
          console.log('new state after cat removed : ', state)
        }
      })
      console.log('remove payload id : ', action.payload['id']);
      return [...state]
    case CategoryActions.UPDATE_CATEGORY:
      console.log('update cat payload : ', action.payload);
      state.forEach(function(val, i){
        if (val.id == action.payload['id']){
          state[i].type = action.payload['type'];
          state[i]['editRequired'] = false;
          console.log('new state after update category : ', state)
        }
      })
    return [...state]
    default:
      return state;
  }
}
