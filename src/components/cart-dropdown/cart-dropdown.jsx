import { useContext } from 'react'

import Button from '../button/button'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item'

import { CartContext } from '../../utils/context/cartContext'




const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    return(
        <div className='cart-dropdown-container' >
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>Goto CheckOut</Button> 
        </div>
    )
}

export default CartDropdown