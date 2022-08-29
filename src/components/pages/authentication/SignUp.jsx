import React, { useState, useContext } from 'react'
import { CreateUserWithEmailAndPasswordAuth, createUserDocFromAuth } from '../../../utils/firebase/firebase.utils'

import FormInput from '../../formInputs/formInputs'
import Button from '../../button/button'
import { UserContext } from '../../../utils/context/context'

import './authentication.styles.scss'

const formFields = {
  displayName:'',
  email: '',
  password: '',
  cpassword: ''
}

const SignUp = () => {

  const resetFormFields = () => {
    setFormField(formFields)
  }

const [ formField, setFormField ] = useState(formFields)
const {displayName, email, password, cpassword } = formField

const { setCurrentUser } = useContext(UserContext)

  const handleChange = event => {
    const { name, value } = event.target
    setFormField({ ...formField, [name]: value })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== cpassword) { 
      alert('password mismatch')
      return
    }
      try {
        const { user } = await CreateUserWithEmailAndPasswordAuth(email, password)
        await createUserDocFromAuth(user, { displayName })
        setCurrentUser(user)
        resetFormFields()
      } catch (error) {
        console.log("user creation error", error)
      }
    }

  return (
    <div className='form-container'>
      <h1> Sign Up </h1>
      <form onSubmit={handleSubmit}>
          <FormInput 
          label="Display Name" 
          type="text" 
          name='displayName' 
          value={displayName} 
          onChange={handleChange} 
          required />
      
          <FormInput 
          label="Email"   
          type="email" 
          name='email' 
          value={email} 
          onChange={handleChange} 
          required />

          <FormInput 
          label="Password"  
          type="password" 
          name='password' 
          value={password} 
          onChange={handleChange} 
          required />
        
          <FormInput 
          label="Comfirm Password" 
          type="password" 
          name='cpassword' 
          value={cpassword} 
          onChange={handleChange} 
          required />

          <Button type='submit'>Sign Up</Button>

      </form>
    </div>
  )
}

export default SignUp