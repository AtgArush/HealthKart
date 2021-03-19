import { combineReducers } from 'redux';
import auth from "./auth";
import appTheme from "./appTheme";
import types from '../types';
import cart from './cart';


const appReducer = combineReducers({
  auth,
  appTheme,
  cart,
});

const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;