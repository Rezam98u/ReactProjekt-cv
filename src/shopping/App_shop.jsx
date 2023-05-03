import { React } from 'react';
import NavbarAppShop from "./share/navbar_App_shop"
import AddressForm from './share/AddressForm';
import Store from './store';
import DetailProduct from "./detail_product"
import Shop from "./share/shop"

// Context 
import UseStateContext from './context/useStateContext';
//Redux
import { Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './Redux/store';
//styles
import './App_shop.scss'

///////////////////////
const AppShop = () => {
    return (
        <Provider store={store}>
            <UseStateContext>
                <NavbarAppShop />
                <Routes>
                    <Route path="/:id" element={<DetailProduct />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/" element={<Store />}></Route>
                    <Route path="/checkout" element={<AddressForm />}></Route>
                </Routes>
            </UseStateContext>
        </Provider>
    );
}

export default AppShop;
