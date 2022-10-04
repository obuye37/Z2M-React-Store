import { CART_ACTION_TYPES } from "./cart.types"

const INITIAL_CART_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalCount: 0,
    totalAmount: 0,
}

export const CartReducer = (state = INITIAL_CART_STATE, action = {}) => {
    switch(action.type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS :
            return { ...state,
                    cartItems: action.payload,
                 }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN :
            return {
                ...state,
                isCartOpen: action.payload
            }
        case CART_ACTION_TYPES.SET_CART_TOTAL :
        return { ...state,
            totalAmount: action.payload,
                }
        case CART_ACTION_TYPES.SET_CART_COUNT :
            return {
                ...state,
                totalCount: action.payload
            }
        default :
           return state
    }
}