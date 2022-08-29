import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

import './authentication.styles.scss'

const Aunthentication = () => {
  return (
    <div className='authentication-page'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Aunthentication