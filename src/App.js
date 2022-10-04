import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { authStateChangedListerner, createUserDocFromAuth, } from './utils/firebase/firebase.utils'

import { setCurrentUser } from './store/user/user.action'
import { Home, Shop, Navigation, Authentication, Checkout } from './routes'


const App = () => {
  const dispatch = useDispatch()  

  useEffect(() => {
    const unSubscribe = authStateChangedListerner( user => {
        if(user) {
            createUserDocFromAuth(user)
        }
        dispatch(setCurrentUser(user))
    })
      return unSubscribe
    }, [])

  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={< Home />} />
        <Route path='shop/*' element={ <Shop /> } />
        <Route path='sign-in' element={ <Authentication /> } />
        <Route path='checkout' element={ <Checkout /> } />
      </Route>
    </Routes>  
  )
}

export default App;
