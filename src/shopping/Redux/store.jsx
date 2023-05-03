// import { applyMiddleware, legacy_createStore as createStore } from 'redux'
// import { combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { logger } from "redux-logger"
// import thunk from 'redux-thunk'

// ////////////////////////
// const rootReducer = combineReducers({
//     // useState: useState,
// })

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

// export default store

/////////////////////////// Redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

export default store

