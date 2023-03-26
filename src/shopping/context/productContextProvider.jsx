import { React, useEffect, useState, createContext } from "react"
import axios from "axios";

//Api 
// import getProducts from "../service/api"

export const ProductContext = createContext();

//////////////////////
const ProductContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data);
            setLoading(false)
        }
        fetchApi()
    }, []);

    return (
        <ProductContext.Provider value={{ products: products, loading: loading }} >
            {children}
        </ProductContext.Provider >
    );
}

export default ProductContextProvider;




