import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo/crown.svg'
import { ReactComponent as Account } from '../../assets/account-icon.svg'
import { UserContext } from '../../utils/context/context'
import { SignOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    
    return (
        <Fragment>
            <nav className='navigation-container'>
                <Link to='/' className='logo-container'>
                    <Logo className="logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'> Store </Link>
                    { currentUser ? 
                        <span onClick={SignOutUser} className='nav-link'>Sign Out</span> :
                        <Link className='nav-link' to='/sign-in'> 
                            <span>
                                <Account />
                                Sign In 
                            </span> 
                        </Link> 
                    }
                    
                </div> 
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation