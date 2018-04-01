import * as types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
        return {
            type: types.ADD_TO_CART,
            product,
            quantity
        }
}
export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInCart = (id_product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        id_product
    }
}
export const actPlusButton = (product, quantity) => {
    return {
        type: types.PLUS_BUTTON,
        product,
        quantity
    }
}