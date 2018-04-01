import * as Types from "../constants/ActionTypes";


var data= JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            let tam = state.filter((item, index) => {
                if (item.product.id === product.id) {
                    return state[index].quantity = state[index].quantity + 1;
                }
            })
            if(tam.length === 0 )
            {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            state.map((item, index)=>{
                if(item.product.id === action.id_product)
                {
                    state.splice(index, 1);
                    localStorage.setItem('cart',JSON.stringify(state));
                    return state;
                }
            })
        case Types.PLUS_BUTTON:
        state.map((item, index)=>{
            if((item.product.id === action.product.id) && action.quantity > 0)
            {
                state[index].quantity = action.quantity;
                localStorage.setItem('cart',JSON.stringify(state));
            }
        })
            return [...state];
        default: return [...state];
    }
}
export default cart;