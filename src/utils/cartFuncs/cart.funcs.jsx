
export const addCartItem = ( cartItems, productToAdd ) => {
    const { id } = productToAdd
    // find cartItems contains productsToAdd
    const matchedItem = cartItems.find((item) => item.id === id) 

    //if found, increment quantity
    if(matchedItem) {
        return cartItems.map((cartItem) => cartItem.id === id 
        ? { ...cartItem, quantity:cartItem.quantity +1}
        : cartItem
         )
    }

    // return new array with modified cartItems/ new cart items
    return [...cartItems, { ...productToAdd, quantity : 1}]
}

export const removeCartItem = (cartItems, itemToRemove, removeWithX) => {
    //check if remove button was clicked
    if(removeWithX) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    // find the cart item to remove or decreace
    const matchedItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id)

    // check if quantity is equal to 1, if it is remove that item from the cart
    if(matchedItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    //return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === itemToRemove.id 
        ? { ...cartItem, quantity:cartItem.quantity -1}
        : cartItem
         )
}


