import { React } from 'react'
import { Routes, Route } from "react-router-dom"
import NavbarAppShop from "./share/navbar_App_shop"
import AddressForm from './share/AddressForm';
import Store from './store';
import DetailProduct from "./detail_product"
import Shop from "./share/shop"
import Home_shop from './Home_shop';

// Context 
import UseStateContext from './context/useStateContext';
//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';
//styles
import './App_shop.scss'

///////////////////////
const AppShop = () => {
    return (
        <Provider store={store}>
            <UseStateContext>
                <div className="relative">
                    <div className="absolute w-full">
                        <NavbarAppShop />
                    </div>
                    <Routes>
                        <Route path="/:id" element={<DetailProduct />}></Route>
                        <Route path="/shop" element={<Shop />}></Route>
                        <Route path="/" element={<Home_shop />}></Route>
                        <Route path="/products" element={<Store />}></Route>
                        <Route path="/checkout" element={<AddressForm />}></Route>
                    </Routes>
                </div>
            </UseStateContext>
        </Provider>
    );
}

export default AppShop;
