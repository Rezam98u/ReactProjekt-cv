import { React } from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
// import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Grid } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { motion } from "framer-motion"
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import img1 from "../img/Frame 3.png"
import img2 from "../img/11765-removebg-preview.png"
import img3 from "../img/40428-removebg.png"


// import { useQuery } from '@apollo/client';
// import { GET_Data } from './GraphQl/queries ';

import '../styles.css'
////////////////////////////
const AppCrypto = () => {
    const navigate = useNavigate()
    //  const { error, data } = useQuery(GET_Data);
    //  console.log(data);


    const [loading, setLoading] = useState(true)
    const [receivedData, setReceivedData] = useState([])
    const [search, setSearch] = useState({ text: "", bool: false })

    const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"

    /////////////
    useEffect(() => {
        // setReceivedData(data)

        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(BASE_URL);
                setReceivedData(data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    // console.log(receivedData);

    ///Pagination
    const PAGE_LIMIT = 20; // Number of items to display on each page
    const [currentPage, setCurrentPage] = useState(1)

    // Calculate the items to display on the current page
    const startIndex = (currentPage - 1) * PAGE_LIMIT;
    const endIndex = startIndex + PAGE_LIMIT;

    // Slice the items according to the current page
    const currentData = receivedData.slice(startIndex, endIndex)
    // console.log(currentData)
    const handleClick = e => {
        setCurrentPage(e.target.textContent); // Set the current page number
    };

    const searchHandler = event => {
        setSearch({
            text: event.target.value,
            bool: true,
        })
    }
    const searched = currentData.filter(item => item.id.includes(search.text.toLowerCase()))
    /////////////////////////


    return (
        <>
            {loading &&
                <div className="flex items-center justify-center gap-3 mt-4 pt-10">
                    <div className="🤚">
                        <div className="👉"></div>
                        <div className="👉"></div>
                        <div className="👉"></div>
                        <div className="👉"></div>
                        <div className="🌴"></div>
                        <div className="👍"></div>
                    </div>
                    <div>  Loading... </div>
                </div>}

            {
                !loading &&
                <div className='bg-black'>
                    <div style={{ height: 560 }} className="relative bg-black">
                        <div>
                            <button className="btn bg-slate-400 ml-20" onClick={() => navigate('/')}>
                                <HomeIcon />
                            </button>
                        </div>

                        <motion.div
                            className='absolute'
                            initial={{ right: -70 }}
                            animate={{ right: 30 }}
                            transition={{ duration: 1.8 }} >
                            <img src={img3} width={350} alt="#" />
                        </motion.div>

                        <div className='absolute top-20'>
                            <motion.div
                                // className='absolute bottom-16 '
                                initial={{ scale: 2 }}
                                animate={{ scale: 0.87 }}
                                transition={{ duration: 1.8 }} >
                                <img src={img1} width={900} alt="#" />
                            </motion.div>

                            <motion.div
                                className='absolute'
                                initial={{ left: -20 }}
                                animate={{ left: 82 }}
                                transition={{ duration: 1.8 }} >
                                <p className='text-white'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br />
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra per
                                    inceptos himenaeos.
                                </p>
                                <button className="rounded bg-slate-400 py-1 mt-3 px-5">
                                    Discover
                                </button>
                            </motion.div>
                        </div>

                        <motion.div
                            className='absolute bottom-1 right-9'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.8 }} >
                            <img src={img2} width={245} alt="#" />
                        </motion.div>
                    </div>

                    ``                    <div style={{ width: "90%" }} className='bg-slate-300 mx-auto rounded-md'>
                        <div className='flex justify-center py-3 '>
                            <input style={{ width: 600 }} type="text" className="rounded-lg border-2 p-1" value={search.text} onChange={searchHandler} placeholder='search' />
                        </div>

                        {
                            search.bool ?
                                <Grid container flex marginX={"auto"} className="border-4 py-3  bg-slate-300">
                                    {searched.map(item =>
                                        <Grid container item flex alignItems={"center"} justifyContent={"center"} key={item.id} className="mb-4">
                                            <Grid item lg={2} sm={2} xs={2}>
                                                <div className="w-14">
                                                    <img className="img-fluid" src={item.image} alt="#" />
                                                </div>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={3}>
                                                <div className="lg:w-1/2 text-center">
                                                    <button className="btn btn-dark"> <div className="text-center"> {item.name} </div> </button>
                                                </div>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={3}>
                                                <div className="lg:w-1/2 text-center">
                                                    <button className="btn btn-primary"> <p>{item.symbol} </p>  </button>
                                                </div>
                                            </Grid>
                                            <Grid item lg={1} sm={2} xs={2}>
                                                <div className="text-center">
                                                    <p className="rounded-md border-2">{item.current_price} </p>
                                                </div>
                                            </Grid>
                                        </Grid>)}
                                </Grid>
                                :
                                <Grid container marginX={"auto"} flex justifyContent={"center"} className="border-4 py-3  bg-slate-300">
                                    {currentData.map(item =>
                                        <Grid container item flex alignItems={"center"} justifyContent={"center"} key={item.id} className="mb-4">
                                            <Grid item lg={2} sm={2} xs={2}>
                                                <div className="w-14">
                                                    <img className="img-fluid" src={item.image} alt="#" />
                                                </div>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={3}>
                                                <div className="lg:w-1/2 text-center">
                                                    <Button variant='text'> <div className="text-center"> {item.name} </div> </Button>
                                                </div>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={3}>
                                                <div className="lg:w-1/2 text-center">
                                                    <Button variant='contained'> <p>{item.symbol} </p>  </Button>
                                                </div>
                                            </Grid>
                                            <Grid item lg={1} sm={2} xs={2}>
                                                <div className="text-center">
                                                    <p className="rounded-md border-2">{item.current_price} </p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>

                        }
                        <div className="flex justify-center py-3 mx-auto bg-slate-300 rounded-lg">
                            <Pagination count={5} color="primary" variant="outlined" shape="rounded" onChange={handleClick} />
                        </div>
                    </div>

                    <div className='flex w-full footer justify-center mt-5 '>
                        <div className='flex justify-between w-4/5 my-4'>
                            <div className='flex gap-5 items-center text-white'>
                                <p> Crypto developed by React JS </p>
                                <p>License</p>
                                <p>Terms</p>
                                <p>Privacy</p>
                            </div>
                            <div className='flex gap-6 items-center '>
                                <div className='text-lg text-white'> Join us on </div>

                                <div className='text-white text-xl hover:text-black'> <AiFillGithub /> </div>
                                <div className='text-white text-xl hover:text-blue-600'> <BsDiscord /> </div>
                                <div className='text-white text-xl hover:text-blue-400'> <BsTwitter /> </div>
                                <div className='text-white text-xl hover:text-blue-800'> <BsFacebook /> </div>
                                <div className='text-white text-xl hover:text-blue-700'> <BsLinkedin /> </div>
                                <div className='text-white text-xl hover:text-fuchsia-500'> <BsInstagram /> </div>
                                <div className='text-white text-xl hover:text-red-500'> <BsYoutube /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default AppCrypto;
