import { createAction } from "../../utils/reducerTypes/createAction";
import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)