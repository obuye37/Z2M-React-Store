import { useContext } from 'react'

import "./checkout.styles.scss"
import "./checkout-item.styles.scss"

import { CartContext } from "../../utils/context/cartContext"

const Checkout = () => {
    const { cartItems, totalQuantityCount, removeItemFromCart, addItemToCart, totalCartAmount } = useContext(CartContext)
    console.log(totalQuantityCount)
    const removeWithX = true
    // const total = totalQuantityCount * totalCartAmount
 
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
                                    <span className='arrow' onClick={()=>removeItemFromCart(cartItem)}>
                                        &larr;
                                    </span> <span className="value">{quantity}</span> <span className='arrow' onClick={()=>addItemToCart(cartItem)}>&rarr;</span></td>
                                <td className='price'>{price}</td>
                                <td className='remove-button' onClick={()=> removeItemFromCart(cartItem, removeWithX)}>&times;</td>
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