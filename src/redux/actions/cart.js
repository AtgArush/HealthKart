import types from '../types';
import store from '../store';
const {dispatch} = store;

export const add_data = data => {
  dispatch({
    type: types.ADD_CART,
    payload: data,
  });
};
