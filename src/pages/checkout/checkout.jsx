// import { useContext } from 'react'

import { useDispatch, useSelector } from "react-redux"

import "./checkout.styles.scss"
import "./checkout-item.styles.scss"

// import { CartContext } from "../../utils/context/cartContext"
import { selectCartItems, selectCartCount, selectCartAmount } from "../../store/cart/cart.selector"
import { addItemToCart, removeItemFromCart } from "../../store/cart/cart.action"

const Checkout = () => {
    // const { cartItems, totalQuantityCount, removeItemFromCart, addItemToCart, totalCartAmount } = useContext(CartContext)
const dispatch = useDispatch()
const totalQuantityCount = useSelector(selectCartCount)
const cartItems = useSelector(selectCartItems)
const totalCartAmount = useSelector(selectCartAmount)


    const removeWithX = true //helper constant for removing a cart item at once
 
    if(totalQuantityCount === 0) {
        return (
            <div>
                <h1>Cart is Empty</h1>
                <span>Goto Store and add Items to your Cart</span>
            </div>
        )
    }

    return (
        <div>
            <table className="checkout-container">
                <thead>
                    <tr className="checkout-header">
                        <th className="header-block">Product</th>
                        <th className="header-block">Description</th>
                        <th className="header-block">Quantity</th>
                        <th className="header-block">Price</th>
                        <th className="header-block">&times;</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItem) => {
                        const { id, imageUrl, name, quantity, price } = cartItem
                        return(
                            <tr key={id} className='checkout-item-container'>
                                <td className='image-container'> <img src={imageUrl} alt={`${name}`}/> </td>
                                <td className='name'>{name}</td>
                                <td className='quantity'>
                                    <span className='arrow' onClick={()=> dispatch(removeItemFromCart(cartItems, cartItem))}>
                                        &larr;
                                    </span> <span className="value">{quantity}</span> <span className='arrow' onClick={()=>dispatch(addItemToCart(cartItems, cartItem))}>&rarr;</span></td>
                                <td className='price'>{price}</td>
                                <td className='remove-button' onClick={()=> dispatch(removeItemFromCart(cartItems, cartItem, removeWithX))}>&times;</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot className='total'>
                    <tr>
                        <td>Total: ${totalCartAmount}</td>
                    </tr>
                </tfoot>
                
            </table>
        </div>
    )
}

export default Checkout