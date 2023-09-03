import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Card, Grid } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

// context 
import { useStateContext } from '../context/useStateContext';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decrease, clear, increase } from '../Redux/useReducerAction'

/////////////////////////
const Shop = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state.useReducer)
    const { total_item, total_payment } = useContext(useStateContext)
    return (
        <div className='px-4 pt-24 dark:bg-gray-800'>
            <Grid container rowGap={0} columnGap={3}>
                <Grid item xs>
                    {state.itemsCounter > 0 ?

                        state.selectedItems.map(item =>
                            <Card elevation={5} key={item.id} className='mb-3 dark:bg-gray-800'>
                                <div className='pl-3 py-2'>
                                    <div className='w-36 '> <img src={item.image} alt="#" /> </div>
                                    <div className='text-xl font-bold'> {item.title} </div>
                                    <div className='pl-3 text-4xl py-2'>   {item.price} $ </div>

                                    {
                                        item.quantity > 1 ?
                                            <span>
                                                <button onClick={() => dispatch(decrease(item))}
                                                    className='btn btn-danger text-xs Btn_out'>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                            </span>
                                            :
                                            <span>
                                                <button onClick={() => { dispatch(removeItem(item)) }}
                                                    className='btn btn-danger text-xs Btn_out'>
                                                    <DeleteForeverSharpIcon fontSize='small' />
                                                </button>
                                            </span>
                                    }

                                    <button className='btn btn-dark rounded-2xl mx-2'>{item.quantity}</button>

                                    <span>
                                        <button onClick={() => { dispatch(increase(item)) }}
                                            className='btn btn-info text-xs Btn_out'>
                                            <FontAwesomeIcon icon={faAdd} />
                                        </button>
                                    </span>
                                </div>
                            </Card>)

                        :

                        state.checkout === true ?
                            <div className='text-4xl text-center text-green-500 pt-40 mt-7'>
                                {/* <AddressForm></AddressForm> */}
                            </div>
                            :
                            <Grid Container>
                                <p className='text-danger text-4xl text-center pt-40'> please select an item </p>
                            </Grid>

                    }
                </Grid>

                <Grid item xs={12} md={4} lg={4} >
                    <div className='border-2 shadow rounded-2xl py-3 h-full px-3'>
                        <div>
                            <p className='text-3xl text-center border-b-4 mb-3 pb-2'> Order-Summary </p>
                            <p className='text-lg font-bold'>Total item : {total_item(state.selectedItems)}  </p>
                            <p className='text-lg font-bold'>Total payment : {total_payment(state.selectedItems)} $ </p>
                        </div>

                        <div className='d-flex items-center pt-4 gap-2'>
                            <button className={state.itemsCounter === 0 ? 'hidden' : ' btn btn-secondary w-1/4 Btn_out'}
                                onClick={() => { dispatch(clear()); Navigate("/AppShop/products") }} >
                                <ClearIcon fontSize='small' /> clear
                            </button>
                            <button onClick={() => { Navigate('/AppShop/checkout') }} className={state.itemsCounter > 0 ? 'btn btn-primary Btn_out w-3/4  ' : ' hidden'} >
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
