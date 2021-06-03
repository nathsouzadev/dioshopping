import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';

export default combineReducers({
    products,
    cart
})
