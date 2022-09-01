import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from '../../utils/context/cartContext';

import './cart-icon.styles.scss'

const CartIcon = () => {
const { isCartOpen, setIsCartOpen } = useContext(CartContext)
const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div onClick={toggleCartOpen} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"></span>
        </div>
    )
    
}

export default CartIcon