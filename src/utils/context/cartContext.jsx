import { createContext, useState, useEffect, } from "react";


const addCartItem = ( cartItems, productToAdd ) => {
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

const removeCartItem = (cartItems, itemToRemove, removeWithX) => {
    //check if remove button was clicked
    if(removeWithX) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    console.log(removeWithX)
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


export const CartContext = createContext(
    {
        isCartOpen : false,
        setIsCartOpen : () => {},
        cartItems : [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        totalCount: 0,
        totalAmount: 0,
    }
)



export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ totalQuantityCount, setTotalQuantityCount ] = useState(0)
    const [ totalCartAmount, setTotalCartAmount ] = useState(0)

    useEffect(() => {
        const totalItemQuantity = cartItems.reduce((currentTotal, {quantity}) => currentTotal + quantity , 0)
        setTotalQuantityCount(totalItemQuantity)

        const totalAmount = cartItems.reduce((currentAmount, { price } ) => currentAmount + price, 0)
        setTotalCartAmount(totalAmount * totalItemQuantity)
    }, [cartItems])
    

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }


    const removeItemFromCart =(itemToRemove, removeWithX) => {
        setCartItems(removeCartItem(cartItems, itemToRemove, removeWithX))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalQuantityCount, totalCartAmount, removeItemFromCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}