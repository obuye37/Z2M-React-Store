import './cart-item.styles.scss'


const CartItem = ( {cartItem} ) => {
    const { imageUrl, price, name, quantity, } = cartItem
    return (
        <div className='cart-item-container'>
            <img alt="" src={`${imageUrl}`}/>
            <div> 
                <h4>{name}</h4>
                <p>{price} x {quantity}</p>
            </div>
            
        </div>
    )
}

export default CartItem