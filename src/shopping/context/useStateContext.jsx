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
    const [openMenuAccessories, setOpenMenuAccessories] = useState({ open: false, arrowUP: Boolean });
    const [openModal, setOpenModal] = useState(Boolean);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [allDataFromMongoDb, setAllDataFromMongoDb] = useState([])
    const [profileImg, setProfileImg] = useState(null)
    const [isCollapse, setIsCollapse] = useState({})



    useEffect(() => {
        // const fetch = async () => {
        //     const { data } = await axios.get('http://localhost:3003/getDataMongoDb')
        //     setAllDataFromMongoDb(data.data)
        //     // console.log(data.data)
        // }
        // fetch()
    }, []);

    //////////////////////// React Query Method //////////////////////// 
    const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
    )

    if (isLoading) return (
        <div className='mt-36 flex items-center justify-center gap-3'>
            <p className='text-3xl'> Loading... </p> <CircularProgress size={45} thickness={5} />
        </div>)

    if (error) return "An error has occurred: " + error.message;

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

    //////////////////////// Search products //////////////////////// 
    const searchHandler = e => { setSearch({ text: e.target.value, bool: true }) }
    const selectHandler = e => { setSelect({ text: e.target.value, bool: true }) }
    const categoryBESelected = products.filter(i => i.category.includes(select.text))
    const searched = categoryBESelected.filter(i => i.title.includes(search.text))
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

    //////////////////////// Data for FAQ  //////////////////////// 
    const FAQ = [
        {
            id: 1,
            question: 'How do I sign up?',
            answer: "If your basket is eligible for ’Pay in 4’ with Klarna, the option will be presented at checkout. After confirming your phone number, you’ll be sent an SMS message to confirm your identity. You’ll then set up your payment method with Klarna and accept the terms of your payment plan.",
        },
        {
            id: 2,
            question: 'Can I return or exchange an in store purchase online?',
            answer: "Sure can! You can start the process at our return portal exchanges.allbirds.com. All you'll need is the order number (will start with a 64) and your shipping address where you'll be shipping the return from. Once you complete the return process, you'll receive instructions on how to ship us back the item to receive a refund or exchange. * Please note that Outlet Store returns or exchanges can be made at our outlet locations only.Final Sale items cannot be returned or exchanged. Final Sale items include: gift cards, insoles, sock bundles, TrinoXO Face Masks, and items tagged final sale on our website and in Allbirds retail stores. "
        },
        {
            id: 3,
            question: 'How do I make a gift exchange?',
            answer: 'You can start the process by using this following this gift exchange link! All you need is your order number which you can find on the original shipping label (it usually starts with 64) or, if you received a gift note in your package, the order number should be printed on the back of the note!'
        },
        {
            id: 4,
            question: "What is Allbirds' return policy? ",
            answer: "Please note that socks, undies & apparel must be unworn and undamaged in their original packaging within their return timeframe and all sock bundles and other accessories are final sale. Refunds must be requested in the same country as the original purchase. Lasty, Final Sale items cannot be returned or exchanged. Final Sale items include: gift cards, insoles, sock bundles, TrinoXO Face Masks, and items tagged final sale on our website and in Allbirds retail stores. "
        },
        {
            id: 5,
            question: 'How do I make my payments?',
            answer: 'At checkout, you will set up 4 convenient, automatic pre-authorized payments that debited/charged your Canadian Visa/Mastercard debit/credit card.'
        },
        {
            id: 6,
            question: 'Which payment methods are accepted?',
            answer: "Klarna accepts all major debit and credit cards such as Visa, Discover, Maestro and Mastercard. Prepaid cards are not accepted."
        },
        {
            id: 7,
            question: "What if I can't make a payment?",
            answer: "Please reach out to the Klarna team and they will be happy to look into the options available. You can contact them through this link."
        },
    ]


    return (
        <>
            <useStateContext.Provider value={{
                search, setSearch, select, setSelect, isMobile, searchHandler, pay, setPay,
                setIsMobile, searched, categoryBESelected, selectHandler, total_item, total_payment,
                loading, setLoading, shorten, isInCart, quantityCount, selectedProduct, setSelectedProduct,
                products, setProducts, scroll, setScroll, openMenu, setOpenMenu, openMenuAcc, setOpenMenuAcc,
                openModal, setOpenModal, email, setEmail, pass, setPass, allDataFromMongoDb, setAllDataFromMongoDb,
                profileImg, setProfileImg, openMenuAccessories, setOpenMenuAccessories, FAQ, isCollapse, setIsCollapse
            }}>
                {children}
            </useStateContext.Provider>
        </>
    );
}

export default UseStateContext;
