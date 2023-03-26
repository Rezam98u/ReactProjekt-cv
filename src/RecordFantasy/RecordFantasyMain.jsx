import React from 'react';
import RecordFantasy from './Record_fantasy'
import { Routes, Route } from 'react-router-dom';

import UserFantasy from './userFantasy';
import SingUp from './Form_singup '
import Login from "./Form_Login"

/// context
import ContextRecordFantasy from "./contextRecordFantasy"

////////////////////////////////
const RecordFantasyMain = () => {
    return (
        <>
            <ContextRecordFantasy>
                <Routes>
                    <Route path="/" element={<RecordFantasy />} ></Route>
                    <Route path="/userFantasy" element={<UserFantasy />} ></Route>
                    <Route path='/singUp' element={<SingUp></SingUp>} ></Route>
                    <Route path="/login" element={<Login></Login>} ></Route>
                </Routes>
            </ContextRecordFantasy>
        </>
    );
}

export default RecordFantasyMain;
