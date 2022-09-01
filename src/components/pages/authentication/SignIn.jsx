import { useState } from 'react'

import { 
  signInWithGooglePopup, 
  SignInWithEmailAndPasswordAuth 
} from '../../../utils/firebase/firebase.utils'
import FormInput from '../../formInputs/formInputs'
import Button from '../../button/button'

import './authentication.styles.scss'


const formFields = {
  email: '',
  password: ''
}

const SignIn = () => {

  const resetFormFields = () => {
    setFormField(formFields)
  }

  const [ formField, setFormField ] = useState(formFields)
  const { email, password } = formField

  const handleChange = event => {
    const { name, value } = event.target
    setFormField({ ...formField, [name]: value })
  }
  
  const handleSubmit = async (event) => {
  event.preventDefault();
  
    try {
      SignInWithEmailAndPasswordAuth(email, password)
      resetFormFields()
    } catch (error) {
      console.log("Sign-In unsuccessful", error)
    }
  }

  const logGoogleUser = async () => {
    signInWithGooglePopup()
  }

  return (
    <div className='sign-in-container'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>

          <FormInput 
            label='Email' 
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
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType="google" onClick={logGoogleUser} >SignIn with Google</Button>
          </div>
          
        
        
      </form>
      
    </div>
  )
}

export default SignIn