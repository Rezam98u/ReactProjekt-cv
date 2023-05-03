// import {
//     FETCH_DATA_REQUEST,
//     FETCH_DATA_SUCCESS,
//     FETCH_DATA_FAILURE,
//   } from './actions';

const initialState = {
    loading: false,
    productsData: [],
    error: null
}

const productsState = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_DATA_SUCCESS":
            return {
                loading: false,
                productsData: action.payload
            }
        case "FETCH_DATA_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default productsState;