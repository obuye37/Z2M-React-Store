import './cart-item.styles.scss'


const CartItem = ( {cartItem} ) => {
    const { imageUrl, price, name, quantity, } = cartItem
    return (
        <div className='cart-item-container'>
            <img alt="" src={`${imageUrl}`}/>
            <div className="item-details" > 
                <span className="name">{name}</span>
                <span className="price">${price} x {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem