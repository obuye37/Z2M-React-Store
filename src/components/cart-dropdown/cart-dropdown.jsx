import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../store/cart/cart.selector'

// import { CartContext } from '../../utils/context/cartContext'

const CartDropdown = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/checkout')
    }
    // const { cartItems } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)

    return(
        <div className='cart-dropdown-container' >
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
                <Button onClick={handleNavigate}>Goto CheckOut</Button>
        </div>
    )
}

export default CartDropdown