import React from 'react'
import { useNavigate } from 'react-router-dom'

import Categories from  './categories'
import './categories.styles.scss'
import Button from '../button/button'

const CategoryItems = () => {
    const navigate = useNavigate()

  return (
      <div className='categories-container'>
          {Categories.map(({id, imageUrl, title, route}) => {
              return (
                <div  onClick={() => navigate(route)} key={id} className="category-container">
                    <div className="background-image" style={{
                    backgroundImage:`url(${imageUrl})`
                }}>
                        <div className='category-body-container'>
                            <h2>{title}</h2>
                            <Button buttonType="inverted" type="button" >Buy Now</Button>
                        </div>
                    </div>
                </div>
              )
          })}
      </div>
  )
}

export default CategoryItems