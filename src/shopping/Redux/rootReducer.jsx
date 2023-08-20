import { combineReducers } from "redux";
import productsState from "./productsState";
import useReducerProducts from './useReducerProducts'
import useReducerShow from './useReducerShow'
//////////////////////////
const rootReducer = combineReducers({
    productsState: productsState,
    useReducer : useReducerProducts ,
    useReducerShow : useReducerShow

})

export default rootReducer;