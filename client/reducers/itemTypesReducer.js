import { SET_ITEM_TYPES } from '../utils/constants';

const initialState = [];

const itemTypesReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_ITEM_TYPES:
      return action.itemTypes;
    default: 
      return state;
  }
}

export default itemTypesReducer;
