import { React, useContext, useEffect } from 'react';
import Product from "./share/product"
import { Grid } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';

// Context
import { useStateContext } from './context/useStateContext'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/actions';

/////////////////////
const Store = () => {
    // const dispatch = useDispatch()
    const { search, select, searched, categoryBESelected, products } = useContext(useStateContext);
    // const { loading, productsData, error } = useSelector(state => state.productsState)

    // useEffect(() => {
    //     !productsData.length && dispatch(fetchData())
    // }, [dispatch]);

    return (
        <div className="px-4 pt-20 dark:bg-slate-500">
            <Grid container rowGap={5} columnSpacing={3} justifyContent={'center'} className='container_store'>
                {search.bool ?
                    searched.map(item =>
                        <Grid item xs={12} sm={6} md={4} lg={3} minWidth='300px' key={item.id} className='bild'>
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
