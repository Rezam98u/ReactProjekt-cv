import { combineReducers } from "redux";
import productsState from "./productsState";
import useReducerProducts from './useReducerProducts'
import useReducerShow from './useReducerShow'
import useReducerCheckEmail from './useReducerCheckEmail'
//////////////////////////
const rootReducer = combineReducers({
    productsState: productsState,
    useReducer: useReducerProducts,
    useReducerShow: useReducerShow,
    useReducerCheckEmail: useReducerCheckEmail

})

export default rootReducer;