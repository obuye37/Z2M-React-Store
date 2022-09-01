import React, { useContext } from 'react'

import { ProductsContext } from '../../../utils/context/productsContext'
import ProductCard from '../../product-cards/productCards'

import './shop.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className='products-container'>
        { products.map((product) => (
            <ProductCard key={product.id} products={product} />
        )
        ) }
    </div>
  )
}
export default Shop