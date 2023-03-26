import { React, useReducer, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"
import axios from 'axios';
import Programmer from './Programmer/programmer';
import AppShop from "./shopping/App_shop"
import AppCrypto from "./Crypto/App_crypto"
import RecordFantasyMain from "./RecordFantasy/RecordFantasyMain"
import './styles.scss'
/////////// Redux 
// import store from "./Redux/store"
// import { Provider } from 'react-redux';

////////////////////////////////////
const initialState = {
    data: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case "true":
            return {
                data: action.payload
            }
        default:
            return state
    }
}

export const MoodHandlerContext = createContext()
/////////////////////////////
const App = () => {

    const [mood, setMood] = useState(false);

    const MoodHandler = () => {
        setMood(!mood);
    }
    
    const [data, dispatch] = useReducer(reducer, initialState)
    const get_Api = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/8")
            .then(response => {
                dispatch({
                    type: "true", payload: response.data
                })
            })
    }
    return (
        <>
            {/* <Provider store={store}> */}
            <div className={mood ? "dark" : ""}>
                <MoodHandlerContext.Provider value={{ mood, MoodHandler }} >
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path="/programmer" element={<Programmer/>} ></Route>
                        <Route path="/products/*" element={<AppShop/>} ></Route>
                        <Route path="/Record_fantasyMain/*" element={<RecordFantasyMain />} ></Route>
                        <Route path="/crypto/*" element={<AppCrypto/>} ></Route>
                    </Routes>
                </MoodHandlerContext.Provider>
            </div>
            {/* </Provider> */}
        </>
    );
}

export default App;
