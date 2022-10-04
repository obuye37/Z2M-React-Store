import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import { CartContext } from '../../utils/context/cartContext';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';

import './cart-icon.styles.scss'

const CartIcon = () => {
// const { isCartOpen, setIsCartOpen, totalQuantityCount } = useContext(CartContext)
const dispatch = useDispatch()
const isCartOpen = useSelector(selectIsCartOpen)
const totalQuantityCount = useSelector(selectCartCount)

const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    return(
        <div onClick={toggleCartOpen} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuantityCount}</span>
        </div>
    )
}

export default CartIcon