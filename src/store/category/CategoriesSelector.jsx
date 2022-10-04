import { createSelector } from "reselect";

const selectCategoryReducer =  (state) => state.categories


const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories
                    .reduce((acc, categoriesMap) =>{
                            const { title, items } = categoriesMap;
                            acc[ title.toLowerCase()] = items
                            return acc
                        },{})
)
