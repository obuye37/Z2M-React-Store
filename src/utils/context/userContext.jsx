import { createContext, useState, useEffect } from 'react'

import { authStateChangedListerner, createUserDocFromAuth, } from '../firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    useEffect(() => {
    const unSubscribe = authStateChangedListerner( user => {
        if(user) {
            createUserDocFromAuth(user)
        }
        setCurrentUser(user)
    })
      return unSubscribe
    }, [])
    
    const [ currentUser, setCurrentUser ] = useState(null)
    const value = {currentUser, setCurrentUser}
return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
)
    
}