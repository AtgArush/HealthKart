import types from '../types';

const intialState = {
  cartList: [],
};

export default function (state = intialState, action) {
  console.log('CArt Reducer', state, action);
  switch (action.type) {
    case types.ADD_CART:
      console.log('CArt Reducer', state, action);
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}
