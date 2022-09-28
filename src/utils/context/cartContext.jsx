import { createContext, useReducer } from "react";


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
        isCartOpen : true,
        setIsCartOpen : () => {},
        cartItems : [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        totalCount: 0,
        totalAmount: 0,
    }
)

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalCount: 0,
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CART_ITEMS' :
            return { ...state,
                    ...action.payload,
                 }
        case 'IS_CART_OPEN' :
            return {
                ...state,
                ...action.payload
            }
        default :
            throw new Error(`unhandled type of ${action.type} in cartReducer`)
    }
}

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { cartItems, totalAmount, totalCount, isCartOpen } = state

    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [ cartItems, setCartItems ] = useState([])
    // const [ totalQuantityCount, setTotalQuantityCount ] = useState(0)
    // const [ totalCartAmount, setTotalCartAmount ] = useState(0)

    // useEffect(() => {
    //     const totalItemQuantity = cartItems.reduce((currentTotal, {quantity}) => currentTotal + quantity , 0)
    //     setTotalQuantityCount(totalItemQuantity)

    //     const totalAmount = cartItems.reduce((currentAmount, { price } ) => currentAmount + price, 0)
    //     setTotalCartAmount(totalAmount * totalItemQuantity)
    // }, [cartItems])


    const cartItemsReducer = (newCartItem) => {
        const newCartCount = newCartItem.reduce((currentTotal, {quantity}) => currentTotal + quantity , 0)

        const newCartAmount = newCartItem.reduce((currentAmount, {price, quantity} ) => currentAmount + quantity * price, 0)

        dispatch({
            type:'SET_CART_ITEMS', 
            payload:{
                cartItems: newCartItem,
                totalCount: newCartCount,
                totalAmount: newCartAmount,
        }})
    }

    const setIsCartOpen = (toggleState) => {
        dispatch({
            type:'IS_CART_OPEN',
            payload: {
                isCartOpen: toggleState
            }
        })
    }
    

    const addItemToCart = (productToAdd) => {
        const newCartItem = addCartItem(cartItems, productToAdd)
        cartItemsReducer(newCartItem)
    }


    const removeItemFromCart =(itemToRemove, removeWithX) => {
        const newCartItem = removeCartItem(cartItems, itemToRemove, removeWithX)
        cartItemsReducer(newCartItem)
    }

    const value = { 
        isCartOpen, 
        setIsCartOpen,
        cartItems, 
        addItemToCart, 
        totalQuantityCount : totalCount, 
        totalCartAmount: totalAmount,
        removeItemFromCart 
    }

    console.log(totalAmount)

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}