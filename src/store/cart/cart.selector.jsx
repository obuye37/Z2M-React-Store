import { createSelector } from "reselect"

const selectCartReducer = (state) => { 
    console.log(state.cart)
        return state.cart
}

export const selectCartItems = createSelector(
    [selectCartReducer],
    ( cart ) => {
        console.log(cart)
        return cart.cartItems}
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((currentTotal, {quantity}) => currentTotal + quantity , 0)
) 

export const selectCartAmount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((currentAmount, {price, quantity} ) => currentAmount + quantity * price, 0)
) 