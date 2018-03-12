import * as types from './types';
import * as cartActions from './actions';

const initialState = {
    cart: false,
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case types.TOGGLE_CART: {
            return !state.cart;
        }
        default:
            return state;
    }
};

export {
    cartActions
};

export default reducer;