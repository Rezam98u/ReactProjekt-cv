import { React, useContext, useEffect } from 'react';
import Product from "./share/product"
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

// Context
import { useStateContext } from './context/useStateContext'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/actions';

/////////////////////
const Store = () => {
    const dispatch = useDispatch()
    const { search, select, searched, categoryBESelected } = useContext(useStateContext);
    const { loading, productsData, error } = useSelector(state => state.productsState)

    useEffect(() => {
        !productsData.length && dispatch(fetchData())
    }, [dispatch]);

    return (
        <div className="px-2 dark:bg-slate-500 ">

            {loading ?
                <div className='mt-36 flex items-center justify-center gap-3'>
                    <p className='text-3xl'> Loading... </p>
                    <CircularProgress size={45} thickness={5} />
                </div>
                :
                <Grid container rowGap={5} columnSpacing={3} justifyContent={'center'} className='container_store pt-24'>
                    {search.bool ?
                        searched.map(item =>
                            <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                                <Product key={item.id} Data={item} />
                            </Grid>)
                        :
                        newSearch()
                    }
                </Grid>
            }
        </div>
    );

    function newSearch() {
        return select.bool ?
            categoryBESelected.length === 0 ?
                productsData.map(item =>
                    <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                        <Product key={item.id} Data={item} />
                    </Grid>)
                :
                categoryBESelected.map(item =>
                    <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                        <Product key={item.id} Data={item} />
                    </Grid>)
            :
            productsData.map(item =>
                <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
                    <Product key={item.id} Data={item} />
                </Grid>);
    }
}

export default Store;
