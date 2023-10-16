import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"
import Programmer from './Programmer/programmer';
import AppShop from "./shopping/App_shop"
import AppCrypto from "./Crypto/Api_Provider"
import RecordFantasyMain from "./RecordFantasy/RecordFantasyMain"
import ThreeJs from './threeJs/threeJs';
import { GoogleOAuthProvider } from '@react-oauth/google';


/// Context
import ContextApp from './ContextApp';

import './styles.scss'
/////////////////////////////
const App = () => {
    return (
        <>
            <BrowserRouter>
                <GoogleOAuthProvider clientId="958087409648-230adphg6efhl7t588o2mqqnoe9vo660">
                    <ContextApp>
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path="/programmer" element={<Programmer />} ></Route>
                            <Route path="/appShop/*" element={<AppShop />} ></Route>
                            <Route path="/record_fantasyMain/*" element={<RecordFantasyMain />} ></Route>
                            <Route path="/crypto/*" element={<AppCrypto />} ></Route>
                            <Route path="/threeJs" element={<ThreeJs />} ></Route>
                        </Routes>
                    </ContextApp>
                </GoogleOAuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App;
