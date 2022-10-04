import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes'

const INITIAL_CATEGORIES_STATE = {
    categories: []
}

export const CategoriesReducer = (state = INITIAL_CATEGORIES_STATE, action) => {
    switch(action.type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return { 
                ...state, 
                categories: action.payload 
            }
        default:
            return state
    }
}