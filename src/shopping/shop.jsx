import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Card, Grid } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

// context 
import { useStateContext } from './context/useStateContext';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decrease, clear, increase } from './Redux/useReducerAction'

/////////////////////////
const Shop = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state.useReducer)
    const { total_item, total_payment } = useContext(useStateContext)
    return (
        <div className='px-4 py-10 dark:bg-gray-800'>
            <Grid container rowGap={0} columnGap={3}>
                <Grid item xs>
                    {state.itemsCounter > 0 ?
                        state.selectedItems.map(item =>
                            <Card elevation={5} key={item.id} className='mb-3 dark:bg-gray-800'>
                                <div className='pl-4 py-3'>
                                    <div className='w-28'> <img src={item.image} alt="#" /> </div>
                                    <div className='text-xl font-bold mt-3'> {item.title} </div>
                                    <div className='text-4xl py-2'>   {item.price} $ </div>

                                    <div className='flex items-center gap-4 '>
                                        {item.quantity > 1 ?
                                            <button onClick={() => dispatch(decrease(item))}
                                                className='btn-danger text-xs Btn_out p-1 px-2 rounded-lg'>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            :
                                            <button onClick={() => { dispatch(removeItem(item)) }}
                                                className='btn-danger text-xs Btn_out p-1 px-2 rounded-lg'>
                                                <DeleteForeverSharpIcon fontSize='small' />
                                            </button>
                                        }
                                        <button className='btn-dark rounded-3xl p-1 px-2'> {item.quantity} </button>

                                        <button onClick={() => { dispatch(increase(item)) }}
                                            className='btn-info text-xs Btn_out p-1 px-2 rounded-lg'>
                                            <FontAwesomeIcon icon={faAdd} />
                                        </button>
                                    </div>
                                </div>
                            </Card>)

                        :

                        state.itemsCounter === 0 &&
                        <p className='text-danger text-4xl text-center pt-20'> please select an item </p>
                    }
                </Grid>

                <Grid item xs={12} md={4} lg={4} >
                    <div className='border-2 shadow rounded-lg py-3 h-full px-3'>
                        <div>
                            <p className='text-3xl text-center border-b-4 mb-3 pb-2'> Order-Summary </p>
                            <p className='text-lg font-bold'>Total item : {total_item(state.selectedItems)}  </p>
                            <p className='text-lg font-bold'>Total payment : {total_payment(state.selectedItems)} $ </p>
                        </div>

                        <div className='d-flex items-center pt-4 gap-2'>
                            <button className={state.itemsCounter === 0 ? 'hidden' : 'p-1 btn-secondary rounded-sm w-1/4 Btn_out'}
                                onClick={() => { dispatch(clear()); Navigate("/AppShop/products") }} >
                                <ClearIcon fontSize='small' /> clear
                            </button>
                            <button onClick={() => { Navigate('/AppShop/checkout') }} className={state.itemsCounter > 0 ? 'p-1 btn-primary rounded-sm Btn_out w-3/4  ' : ' hidden'} >
                                checkout
                            </button>
                            {/* <Link to="/products/checkout"> <button className={state.itemsCounter > 0 ? 'btn btn-primary mx-1 Btn_out w-80 ' : ' hidden'} onClick={() => { dispatch({ type: "checkout" }) }} > checkout </button> </Link> */}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Shop;
