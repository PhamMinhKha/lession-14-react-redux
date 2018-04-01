import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import reducer_message from './reducer_message';

const AppReducer = combineReducers({
    products,
    cart,
    message : reducer_message
})
export default AppReducer;