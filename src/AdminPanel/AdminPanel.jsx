import { React, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Calendar from "./pages/Calendar/Calendar";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";


import "./style/dark.scss";
/////////////////////////////
const AdminPanel = () => {
    const { darkMode } = useContext(DarkModeContext);


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users">
                    <Route index element={<List />} />
                    <Route path=":userId" element={<Single />} />
                    <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
                </Route>
                <Route path="/products">
                    <Route index element={<List />} />
                    <Route path=":productId" element={<Single />} />
                    <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
                </Route>
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </>
    )
}

export default AdminPanel;
