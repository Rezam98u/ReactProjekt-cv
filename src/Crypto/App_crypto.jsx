import { React } from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Button, Grid } from "@mui/material";
import Pagination from '@mui/material/Pagination';
// import video from "../video/spare your time and.mp4"

import { useQuery } from '@apollo/client';

import { GET_Data } from './GraphQl/queries ';
////////////////////////////
const AppCrypto = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [receivedData, setReceivedData] = useState([])
    const [search, setSearch] = useState({ text: "", bool: false })




    const { error, data } = useQuery(GET_Data);

    console.log(data);

    /////////////
    useEffect(() => {
        setReceivedData(data)

        // const fetchData = async () => {
        //     setLoading(true);
        //     try {
        //         const { data } = await axios.get(BASE_URL);
        //         setReceivedData(data);
        //     } catch (error) {
        //         console.error(error.message);
        //     }
        //     setLoading(false);
        // }
        // fetchData();
    }, []);

    // console.log(receivedData);

    ///Pagination
    // const PAGE_LIMIT = 20; // Number of items to display on each page
    // const [currentPage, setCurrentPage] = useState(1)

    // // Calculate the items to display on the current page
    // const startIndex = (currentPage - 1) * PAGE_LIMIT;
    // const endIndex = startIndex + PAGE_LIMIT;

    // // Slice the items according to the current page
    // const currentData = receivedData.slice(startIndex, endIndex)
    // // console.log(currentData)
    // const handleClick = e => {
    //     setCurrentPage(e.target.textContent); // Set the current page number
    // };

    const searchHandler = event => {
        setSearch({
            text: event.target.value,
            bool: true,
        })
    }
    // const searched = currentData.filter(item => item.id.includes(search.text.toLowerCase()))
    /////////////////////////


    return (
        <div>

            {loading &&
                <div className="flex items-center justify-center gap-3 mt-4">
                    <div> <Spinner animation="border" variant="warning" role="status" /></div>
                    <div>  Loading... </div>
                </div>}

            {
                !loading &&
                <div>
                    {/* <div className='w-full'>
                        <video src={video} autoPlay alt="#" />
                    </div> */}
                    <div className="flex w-4/5 mx-auto items-center justify-between my-4">
                        <div>
                            <button className="btn bg-slate-400 ml-5" onClick={() => navigate('/')}>
                                <HomeIcon />
                            </button>
                        </div>
                        <div>
                            <input type="text" className="rounded-lg w-72 border-2 p-1" value={search.text} onChange={searchHandler} placeholder='search' />
                        </div>
                    </div>

                    <div>
                        {/* {
                            search.bool ?
                                <Grid container flex width={"98%"} marginX={"auto"} className="border-4 py-3 rounded-md bg-slate-100">
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
                                <Grid container width={"98%"} marginX={"auto"} flex justifyContent={"center"} className="border-4 py-3 rounded-md bg-slate-100">
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
                        } */}
                    </div>
                    {/* <div className="flex justify-center my-5">
                        <Pagination count={5} color="primary" variant="outlined" shape="rounded" onChange={handleClick} />
                    </div> */}
                </div>
            }

        </div>
    )
}

export default AppCrypto;












/////////////////////////////////



// const AppCrypto = () => {

//     const [loading, setLoading] = useState(true);

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const { data: response } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
//                 setData(response);

//                 // console.log(data)

//             } catch (error) {
//                 console.error(error.message);
//             }
//             setLoading(false);
//         }

//         fetchData();
//     }, []);

//     return (
//         <div>

//             {loading && <div> Loading </div>}

//             {!loading &&
//                 <div>
//                     <div> <input type="text" name="" value="" placeholder='search' /> </div>
//                     {data.map(item => (<span>{item.name}</span>))}
//                 </div>
//             }

//         </div>
//     )
// }

// export default AppCrypto;