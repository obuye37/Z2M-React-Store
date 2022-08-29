import React from 'react'
import './category.scss'
const Category = ({id, imageBg, title}) => {
  return (
    <div key={id} style={`backgroundImage:uri(${imageBg})`} >
        <div>
            <h2>{title}</h2>
            <p>Buy Now</p>
        </div>
    </div>
  )
}

export default Category