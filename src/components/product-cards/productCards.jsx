import { useContext } from 'react'

import './product-card.styles.scss'
import Button from "../button/button"

import { CartContext } from '../../utils/context/cartContext'

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)
    const { name, imageUrl, price } = product

    const addToCart = () => addItemToCart(product)

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