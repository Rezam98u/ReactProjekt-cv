import React from 'react';
import RecordFantasy from './Record_fantasy'
import { Routes, Route } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import UserFantasy from './userFantasy';
import SingUp from './Form_singup '
import Login from "./Form_Login"

/// context
import ContextRecordFantasy from "./Context/contextRecordFantasy"
import TypeOfManAndWoman from './typeOfManAndWoman';

////////////////////////////////
const RecordFantasyMain = () => {
    return (
        <>
            {/* <GoogleOAuthProvider clientId="958087409648-230adphg6efhl7t588o2mqqnoe9vo660.apps.googleusercontent.com"> */}
            <ContextRecordFantasy>
                <Routes>
                    <Route path="/" element={<RecordFantasy />} ></Route>
                    <Route path="/userFantasy" element={<UserFantasy />} ></Route>
                    <Route path='/singUp' element={<SingUp/>} ></Route>
                    <Route path="/login" element={<Login/>} ></Route>
                    <Route path="/typeOfManAndWoman" element={<TypeOfManAndWoman />} ></Route>
                </Routes>
            </ContextRecordFantasy>
            {/* </GoogleOAuthProvider> */}
        </>
    );
}

export default RecordFantasyMain;
