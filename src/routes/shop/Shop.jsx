import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'


import getCollectionAndDocs from '../../utils/firebase/getCollections.utils.js'
import { setCategories } from '../../store/category/CategoriesAction.jsx'
import CategoriesPreview from '../../pages/categories-preview/categories-preview'
import Category from '../../pages/category/category'

const Shop = () => {
  const dispatch = useDispatch()
    
  useEffect(() => {
      const getCategoryMap = async () => { 
          const categoryArray = await getCollectionAndDocs()
          dispatch(setCategories(categoryArray))
      }
          getCategoryMap()
  }, [])
  
 return(
  <Routes>
    <Route index element={ <CategoriesPreview /> } />
    <Route path=':category' element={ <Category /> } />
  </Routes>
 )
}
export default Shop