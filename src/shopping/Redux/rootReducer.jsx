import { combineReducers } from "redux";
import productsState from "./productsState";
import useReducerProducts from './useReducerProducts'

//////////////////////////
const rootReducer = combineReducers({
    productsState: productsState,
    useReducer : useReducerProducts
})

export default rootReducer;