import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect, Fragment } from 'react'

import { CategoriesContext } from '../../utils/context/categoriesContext'
import ProductCard from '../../components/product-cards/productCards'

import './category.scss'

const Category = () => {
    const { category } = useParams()
    const { categories } = useContext(CategoriesContext)
    const [ products, setProducts ] = useState(categories[category])

    useEffect(()=>{
        setProducts(categories[category])
    }, [category, categories])

    return(
        <Fragment>
            <h1 className='category-title'>{category.toUpperCase()}</h1>
            <div className='category-container-1'>
                {
                    products && 
                    products.map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </div>
        </Fragment>
        
    )
}

export default Category