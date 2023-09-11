import { combineReducers } from "redux";
import productsState from "./productsState";
import useReducerProducts from './useReducerProducts'
import useReducerShow from './useReducerShow'
import useReducerShow2 from './useReducerShow2'
import useReducerShow3 from './useReducerShow3'
import useReducerCheckEmail from './useReducerCheckEmail'
//////////////////////////
const rootReducer = combineReducers({
    productsState: productsState,
    useReducer: useReducerProducts,
    useReducerShow: useReducerShow,
    useReducerShow2: useReducerShow2,
    useReducerShow3: useReducerShow3,
    useReducerCheckEmail: useReducerCheckEmail

})

export default rootReducer;