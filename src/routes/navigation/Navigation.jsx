import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo/crown.svg'

import { UserContext } from '../../utils/context/userContext'
import { CartContext } from '../../utils/context/cartContext'
import { SignOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'

import './navigation.styles.scss'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <nav className='navigation-container'>
                <Link to='/' className='logo-container'>
                    <Logo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'> Store </Link>
                    { currentUser ? 
                        <span onClick={SignOutUser} className='nav-link'>Sign Out</span> :
                        <Link className='nav-link' to='/sign-in'> Sign In </Link> 
                    }
                <CartIcon />
                </div> 
                {isCartOpen && <CartDropdown />}
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation