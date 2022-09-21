import React from 'react'

import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../../pages/categories-preview/categories-preview'
import Category from '../../pages/category/category'

const Shop = () => {
 return(
  <Routes>
    <Route index element={ <CategoriesPreview /> } />
    <Route path=':category' element={ <Category /> } />
  </Routes>
 )
}
export default Shop