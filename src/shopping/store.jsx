import { React, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, TextField, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Product from "./product"


// import CircularProgress from '@mui/material/CircularProgress';

// Context
import { useStateContext } from './context/useStateContext'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/actions';

/////////////////////
const Store = () => {
    // const dispatch = useDispatch()
    const location = useLocation();
    const PathName = location.pathname

    const { search, select, searched, categoryBESelected, products, searchHandler, selectHandler } = useContext(useStateContext);
    // const { loading, productsData, error } = useSelector(state => state.productsState)

    // useEffect(() => {
    //     !productsData.length && dispatch(fetchData())
    // }, [dispatch]);

    return (
        <div className="mx-10 pt-9 pb-5 dark:bg-slate-500">
            <div className={PathName === "/AppShop/products" ? "flex items-center justify-around MD:hidden" : "hidden"}>
                <div className="flex gap-2 items-center">
                    <button> <SearchIcon fontSize='medium' /> </button>
                    <div>
                        <TextField className='bg-zinc-300 rounded-lg w-60' 
                            type="search"
                            label="search"
                            value={search.text}
                            size='small'
                            onChange={searchHandler} />
                    </div>
                </div>

                <div className='w-60'>
                    <TextField
                        className='ml-2 bg-zinc-300 rounded-md'
                        select fullWidth
                        value={select.text}
                        label="Please select a Category"
                        size='small'
                        onChange={selectHandler} >

                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="clothing">clothing</MenuItem>
                        <MenuItem value="electronics">electrical devices</MenuItem>
                        <MenuItem value="jeweler">jeweler</MenuItem>
                    </TextField>
                </div>
            </div>
            <Grid container rowGap={5} columnSpacing={3} justifyContent={'center'} className='container_store mt-3'>
                {search.bool ?
                    searched.map(item =>
                        <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} >
                            <Product key={item.id} Data={item} />
                        </Grid>)
                    :
                    newSearch()
                }
            </Grid>
        </div>
    );

    function newSearch() {
        return select.bool ?
            categoryBESelected.length === 0 ?
                products.map(item =>
                    <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                        <Product key={item.id} Data={item} />
                    </Grid>)
                :
                categoryBESelected.map(item =>
                    <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                        <Product key={item.id} Data={item} />
                    </Grid>)
            :
            products.map(item =>
                <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                    <Product key={item.id} Data={item} />
                </Grid>);
    }
}

export default Store;
