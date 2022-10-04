import { createAction } from '../../utils/reducerTypes/createAction'
import { CART_ACTION_TYPES } from './cart.types'
import { addCartItem } from '../../utils/cartFuncs/cart.funcs'
import { removeCartItem } from '../../utils/cartFuncs/cart.funcs'

export const setCartItems = (newCartItem) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem) 

export const setIsCartOpen = (isCartOpen) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen)



export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd)
    return setCartItems(newCartItem)
}

export const removeItemFromCart =(cartItems, itemToRemove, removeWithX) => {
    const newCartItem = removeCartItem(cartItems, itemToRemove, removeWithX)
    return setCartItems(newCartItem)
}