import axios from 'axios';
import { useEffect } from 'react';
import { React, useState, createContext, useReducer } from 'react';
import { useSelector } from 'react-redux';

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
    const [Data, setData] = useState([]);

    //////////////////////
    const initialState = {
        selectedItems: [],
        itemsCounter: 0,
        checkout: false
    }

    const cartReducer = (state, action) => {
        console.log(state)
        switch (action.type) {

            case "add_item":
                state.selectedItems.push({ ...action.payload, quantity: 1 })
                state.itemsCounter++
                return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    itemsCounter: state.itemsCounter
                }
            // if (!state.selectedItems.find(item => item.id === action.payload.id)) {

            //     state.selectedItems.push({
            //         ...action.payload,
            //         quantity: 1
            //     })
            // }
            // return {
            //     ...state,
            //     selectedItems: [...state.selectedItems]
            // }

            case "remove_item":
                const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
                state.itemsCounter--;
                console.log(newSelectedItems);
                return {
                    ...state,
                    selectedItems: [...newSelectedItems]
                }
            // case "remove_item":
            //     // state.selectedItems.find(item => item.id === action.payload.id)

            //     const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            //     state.selectedItems[index].shift()
            //     state.itemsCounter--

            //     return {
            //         ...state,
            //         selectedItems: [...state.selectedItems]
            //     }

            case "add":
                const add_index = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[add_index].quantity++;
                return {
                    ...state,
                }
            case "min":
                state.itemsCounter++;
                const min_index = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[min_index].quantity--;
                return {
                    ...state,
                }

            case "checkout":
                return {
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkout: true,
                }

            case "clear":
                return {
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkout: false,
                }

            default: return state
        }
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    //////////////////////
    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data);
            setLoading(false)
        }
        fetchApi()
    }, []);
    ///////////////////////
    const searchHandler = (e) => {
        setSearch({ text: e.target.value, bool: true })
    }
    const selectHandler = (e) => {
        setSelect({ text: e.target.value, bool: true })
    }
    const categoryBESelected = productsData.filter(item => item.category.includes(select.text))
    const searched = categoryBESelected.filter(item => item.title.includes(search.text));
    ///////////////////////
    const prices = (sum) => {
        const summ = sum.map(item => item.quantity)
        let summm = 0
        for (let i = 0; i < summ.length; i++) {
            summm += summ[i]
        }
        return summm
        // console.log(summm);
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
                setIsMobile, searched, categoryBESelected, selectHandler, state, dispatch,
                prices, total_payment, loading, setLoading, shorten, isInCart, quantityCount,
                Data, setData, products
            }}>

                {children}
            </useStateContext.Provider>
        </>
    );
}

export default UseStateContext;
