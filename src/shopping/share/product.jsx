import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Card, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../Redux/useReducerAction'

//context
import { useStateContext } from '../context/useStateContext';

///////////////////////////////////
const Product = (props) => {
    const dispatch = useDispatch()
    const { shorten, isInCart, quantityCount } = useContext(useStateContext)
    const state = useSelector(state => state.useReducer)
    const { image, price, title, id } = props.Data

    return (
        <Card elevation={8} className='py-3 dark:bg-slate-500'>
            <Link to={`/AppShop/${id}`} className='link'> <img src={image} alt="#" /> </Link>
            <div className='flex justify-between py-6'>
                <p className='text-start font-bold pl-2 text-lg '>{shorten(title)}</p>
                <p className='text-end pr-2 text-lg '> {price} $ </p>
            </div>

            <Grid className='flex' alignItems={'center'} justifyContent={'space-evenly'} >
                <Link to={`/AppShop/${id}`} className='link'>
                    <button className='py-2 btn-success text-sm text-center w-20 rounded-lg'> Details </button>
                </Link>

                <div>
                    {
                        isInCart(state, id) ?
                            <div>
                                {quantityCount(state, id) > 1 ?
                                    <span>
                                        <button onClick={() => dispatch(decrease(props.Data))}
                                            className='p-1 px-2 rounded-lg btn-danger Btn_out text-sm'>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                    </span>
                                    :
                                    <span>
                                        <button onClick={() => dispatch(removeItem(props.Data))}
                                            className='px-2 p-1 rounded-lg btn-danger Btn_out text-xs'>
                                            {/* <FontAwesomeIcon icon={faDeleteLeft} /> */}
                                            <DeleteForeverSharpIcon fontSize='small' />
                                        </button>
                                    </span>
                                }

                                {<Badge pill className='p-2 mx-2'> {quantityCount(state, id)} </Badge>}

                                <span>
                                    <button onClick={() => dispatch(increase(props.Data))}
                                        className='p-1 px-2 rounded-lg btn-info Btn_out text-sm'>
                                        <FontAwesomeIcon icon={faAdd} />
                                    </button>
                                </span>
                            </div>
                            :
                            <button onClick={() => dispatch(addItem(props.Data))}
                                className='py-2 rounded-lg btn-info text-sm w-36'>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add to card
                            </button>
                    }
                </div>
            </Grid>
        </Card>
    );
}

export default Product;
