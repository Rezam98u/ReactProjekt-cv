import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import BasicPagination from './material_ui'
import { Grid } from "@mui/material";
import Pagination from '@mui/material/Pagination';
//////////////////////////////////////// new code ////////////////////////////////////////
const Api = () => {
    const navigate = useNavigate()
    // const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}`
    const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"

    const [loading, setLoading] = useState(true)
    const [receivedData, setReceivedData] = useState([])
    const [search, setSearch] = useState({ text: "", bool: false })

    /////////////
    useEffect(() => {
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
    const searched = currentData.filter(item => item.id.includes(search.text))
    /////////////////////////
    return (
        <div className="mt-5">

            {loading &&
                <div className="flex items-center justify-center ">
                    <div> <Spinner animation="border" variant="warning" role="status" /></div>
                    <div>  Loading... </div>
                </div>}

            {
                !loading &&
                <div>
                    <div className="flex items-center justify-around">
                        <div>
                            <button className="btn bg-slate-400" onClick={() => navigate('/')}>
                                <HomeIcon />
                            </button>
                        </div>
                        <div className="w-3/5 pb-4 pt-3 text-center ">
                            <input type="text" className="rounded-lg  border-4 p-2" value={search.text} onChange={searchHandler} placeholder='search' />
                        </div>
                    </div>

                    <div>
                        {
                            search.bool ?
                                <Grid container flex className="border-4 py-3 rounded-md bg-slate-100">
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
                                <Grid container flex justifyContent={"center"} className="border-4 py-3 rounded-md bg-slate-100">
                                    {currentData.map(item =>
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
                                        </Grid>
                                    )}
                                </Grid>
                        }
                    </div>
                    <div className="flex justify-center my-5">
                        {/* Method 1 */}
                        {/* <BasicPagination setPage={setCurrentPage} /> */}

                        {/* Method 2 */}
                        <Pagination count={5} color="primary" variant="outlined" shape="rounded" onChange={handleClick} />
                    </div>
                </div>
            }
        </div>
    )
}
export default Api;
















