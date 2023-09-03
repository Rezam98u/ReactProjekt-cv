import axios from 'axios';
import { React, useState, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from "react-query";
import { CircularProgress } from '@mui/material';

export const useStateContext = createContext()
//////////////////////////
const UseStateContext = ({ children }) => {
    const { productsData } = useSelector(state => state.productsState)

    const [isMobile, setIsMobile] = useState(false);
    const [search, setSearch] = useState({ text: "", bool: false });
    const [select, setSelect] = useState({ text: "", bool: false });
    const [loading, setLoading] = useState(Boolean);
    const [products, setProducts] = useState([]);
    const [pay, setPay] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [scroll, setScroll] = useState(Number);
    const [openMenu, setOpenMenu] = useState({ open: false, arrowUP: Boolean });
    const [openMenuAcc, setOpenMenuAcc] = useState({ open: false, arrowUP: Boolean });
    const [openModal, setOpenModal] = useState(Boolean);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [allDataFromMongoDb, setAllDataFromMongoDb] = useState([])


    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get('http://localhost:3003/getDataMongoDb')
            setAllDataFromMongoDb(data.data)
            // console.log(data.data)
        }
        fetch()
    }, []);

    /////////////////// React Query Method /////////////////// 
    const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
    )

    if (isLoading) return (
        <div className='mt-36 flex items-center justify-center gap-3'>
            <p className='text-3xl'> Loading... </p> <CircularProgress size={45} thickness={5} />
        </div>)

    if (error) return "An error has occurred: " + error.message;

    // console.log(products)

    /////////////////// Old Method
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         setLoading(true)
    //         const response = await axios.get("https://fakestoreapi.com/products")
    //         setProducts(response.data);
    //         setLoading(false)
    //     }
    //     fetchApi()
    // }, []);
    ////////////////////////////////////////////////////////////////////
    const searchHandler = (e) => {
        setSearch({ text: e.target.value, bool: true })
    }
    const selectHandler = (e) => {
        setSelect({ text: e.target.value, bool: true })
    }
    const categoryBESelected = productsData.filter(item => item.category.includes(select.text))
    const searched = categoryBESelected.filter(item => item.title.includes(search.text))
    ///////////////////////
    const total_item = (sum) => {
        const newSum = sum.map(item => item.quantity)
        let finalSum = 0
        for (let i = 0; i < newSum.length; i++) {
            finalSum += newSum[i]
        }
        return finalSum
        // console.log(finalSum);
    }
    const total_payment = (sum) => {
        const total_payment = sum.map(item => item.quantity * item.price)
        let payment = 0
        for (let i = 0; i < total_payment.length; i++) {
            payment += total_payment[i]
        }
        return payment
    }
    ///////////////////////
    const shorten = title => title.split(" ")[0] + " " + title.split(" ")[1]
    const isInCart = (state, id) => !!state.selectedItems.find(item => item.id === id)
    // two more
    const quantityCount = (state, id) => {
        const index = state.selectedItems.findIndex(item => item.id === id)
        const quantity = state.selectedItems[index].quantity
        return quantity
    }

    return (
        <>
            <useStateContext.Provider value={{
                search, setSearch, select, setSelect, isMobile, searchHandler, pay, setPay,
                setIsMobile, searched, categoryBESelected, selectHandler, total_item, total_payment,
                loading, setLoading, shorten, isInCart, quantityCount, selectedProduct, setSelectedProduct,
                products, setProducts, scroll, setScroll, openMenu, setOpenMenu, openMenuAcc, setOpenMenuAcc,
                openModal, setOpenModal, email, setEmail, pass, setPass, allDataFromMongoDb, setAllDataFromMongoDb
            }}>
                {children}
            </useStateContext.Provider>
        </>
    );
}

export default UseStateContext;
