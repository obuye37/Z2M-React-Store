import React, { useContext } from 'react'

import { CategoriesContext } from '../../utils/context/categoriesContext'
import ProductCard from '../../components/product-cards/productCards'

import './shop.scss'

const Shop = () => {
  const { categories } = useContext(CategoriesContext)
  console.log(categories)
  return (
    <div style={{padding:"0 50px"}}>
      {
        Object.keys(categories).map( title => (
          <React.Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              { categories[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </React.Fragment>
        ))
      }
      
    
    </div>
    
  )
}
export default Shop