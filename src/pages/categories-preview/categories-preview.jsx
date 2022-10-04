import React, { Fragment, useContext } from 'react'
import { useSelector } from 'react-redux'

// import { CategoriesContext } from '../../utils/context/categoriesContext'
import CategoryPreview from '../../components/category-preview/category-preview'
import { selectCategoriesMap } from '../../store/category/CategoriesSelector'

const CategoriesPreview = () => {
    // const { categories } = useContext(CategoriesContext)
    const categories = useSelector(selectCategoriesMap)
  return (
    <Fragment>
        {
            Object.keys(categories).map((title) => {
                const products = categories[title]
                return(
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })
        }
    </Fragment>
  )
}

export default CategoriesPreview