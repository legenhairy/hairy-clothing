import CartActionTypes from './cart.types';

const INTIIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
  	case CartActionTypes.TOGGLE_CART_HIDDEN:
  	  return {
  	  	...state,
  	  	hidden: !state.hidden
  	  }
  	default:
  	  return state;	
  }
}

export default cartReducer;