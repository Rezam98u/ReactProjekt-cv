// import axios from 'axios';

// // export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// // export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// // export const FETCH_DATA_FAILURE = 'FETCH_DATA_REQUEST';

// export const fetchData = () => {
//     return (dispatch) => {
//         dispatch(fetchDataRequest())
//         axios.get('https://fakestoreapi.com/products')
//             .then((response) => {
//                 const data = response.data
//                 dispatch(fetchDataSuccess(data))
//             })
//         .catch((error) => {
//             const errorMsg = error.message
//             dispatch(fetchDataFailure(errorMsg))
//         });
//     };
// };

// export const fetchDataRequest = () => {
//     return {
//         type: 'FETCH_DATA_REQUEST',
//     };
// };

// const fetchDataSuccess = (data) => {
//     return {
//         type: 'FETCH_DATA_SUCCESS',
//         payload: data,
//     };
// };
// export default fetchDataSuccess

// export const fetchDataFailure = (error) => {
//     return {
//         type: 'FETCH_DATA_FAILURE',
//         payload: error,
//     };
// };
