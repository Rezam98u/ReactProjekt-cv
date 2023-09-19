import { React } from 'react'
import { Routes, Route } from "react-router-dom"
import NavbarAppShop from "./navbar_App_shop"
import AddressForm from './AddressForm';
import Store from './store';
import DetailProduct from "./detail_product"
import Shop from "./shop"
import Home_shop from './Home_shop';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from "react-query";

// Context 
import UseStateContext from './context/useStateContext';
//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';
//styles
import './App_shop.scss'
import City from './city';

///////////////////////
const AppShop = () => {
    const queryClient = new QueryClient({});

    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId='175738615798-ni3ctkvnb3gcg0ou7r9ld1m31ugcck2e.apps.googleusercontent.com'>
                <QueryClientProvider client={queryClient}>
                    <UseStateContext>
                        <NavbarAppShop />
                        <Routes>
                            <Route path="/:id" element={<DetailProduct />}></Route>
                            <Route path="/shop" element={<Shop />}></Route>
                            <Route path="/" element={<Home_shop />}></Route>
                            <Route path="/products" element={<Store />}></Route>
                            <Route path="/checkout" element={<AddressForm />}></Route>
                            <Route path="/city" element={<City />}></Route>
                        </Routes>
                    </UseStateContext>
                </QueryClientProvider>
            </GoogleOAuthProvider>
        </Provider >
    );
}

export default AppShop;
