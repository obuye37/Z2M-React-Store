import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo/crown.svg'
import { UserContext } from '../../utils/context/context'
import { SignOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const SignOut = async () => {
    const { setCurrentUser } = useContext(UserContext)
        try {
            await SignOutUser()
            setCurrentUser(null)
            alert('successfully signed out')
        } catch (error) {
            console.log("signout error", error)
        }
       
    }
const Navigation = () => {
   
    const { currentUser } = useContext(UserContext)
    console.log(currentUser)

    return (
        <Fragment>
            <nav className='navigation-container'>
                <Link to='/' className='logo-container'>
                    <Logo className="logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'> Store </Link>
                    { currentUser ? 
                        <span onClick={SignOut} className='nav-link'>Sign Out</span> :
                        <Link className='nav-link' to='/sign-in'> Sign In </Link>
                    }
                    
                </div> 
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation