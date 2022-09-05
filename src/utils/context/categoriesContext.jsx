import { createContext, useState, useEffect } from 'react'

import getCollectionAndDocs from '../firebase/getCollections.utils.js'

export const CategoriesContext = createContext({
    categories: {},
})

export const CategoriesProvider = ({children}) => {


useEffect(() => {
    const getCategoryMap = async () => { 
        const categoryMap = await getCollectionAndDocs()
        setCategories(categoryMap)
    }
        getCategoryMap()
}, [])


    const [ categories, setCategories ] = useState({})
    const value = { categories }
return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
)}