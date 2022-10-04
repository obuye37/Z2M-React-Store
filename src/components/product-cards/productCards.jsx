// import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import './product-card.styles.scss'
import Button from "../button/button"
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

// import { CartContext } from '../../utils/context/cartContext'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    // const { addItemToCart } = useContext(CartContext)
    const { name, imageUrl, price } = product

    const cartItems = useSelector(selectCartItems)

    const addToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <div className='product-card-container'>
            <img alt='' src={imageUrl} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCart} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard