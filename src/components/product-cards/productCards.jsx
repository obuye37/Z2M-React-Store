import './product-card.styles.scss'
import Button from "../button/button"

const ProductCard = ({ products }) => {
    const { name, imageUrl, price } = products
    return (
        <div className='product-card-container'>
            <img alt='' src={imageUrl} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}

export default ProductCard