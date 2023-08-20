import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"
import Programmer from './Programmer/programmer';
import AppShop from "./shopping/App_shop"
import Api from "./Crypto/Api_Provider"
import RecordFantasyMain from "./RecordFantasy/RecordFantasyMain"
import { GoogleOAuthProvider } from '@react-oauth/google';


/// Context
import ContextApp from './ContextApp';

import './styles.scss'
/////////////////////////////
const App = () => {
    return (
        <>
            <GoogleOAuthProvider clientId="958087409648-230adphg6efhl7t588o2mqqnoe9vo660">
                <ContextApp>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path="/programmer" element={<Programmer />} ></Route>
                        <Route path="/AppShop/*" element={<AppShop />} ></Route>
                        <Route path="/Record_fantasyMain/*" element={<RecordFantasyMain />} ></Route>
                        <Route path="/crypto/*" element={<Api />} ></Route>
                    </Routes>
                </ContextApp>
            </GoogleOAuthProvider>
        </>
    );
}

export default App;
