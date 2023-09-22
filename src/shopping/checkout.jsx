import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';

// Context
import { useStateContext } from "./context/useStateContext"
// Redux
import { checkout } from './Redux/useReducerAction';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

/////////////////
const Checkout = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { total_payment, pay, setPay, email, total_item } = useContext(useStateContext)
    const state = useSelector(state => state.useReducer)

    const { handleSubmit, register, formState: { errors } } = useForm()
    const paySubmit = () => {
        axios.post('http://localhost:3003/checkOut', { email: email, total_item: total_item(state.selectedItems) })
            .then(res => console.log(res))
            .catch(e => console.log(e))
        // setPay(false); dispatch(checkout())
    }
    return (
        <div className='px-8 pt-14'>
            <form onSubmit={handleSubmit(paySubmit)} className='shadow-2xl border-2 rounded-lg py-4 my-5'>

                <div className='mx-auto w-4/5 mb-4 pb-4 text-4xl text-center font-bold'>
                    Check Out
                </div>

                {pay === true && state.itemsCounter !== 0 ?

                    /// section 1 
                    <div className='mx-auto w-4/5 '>
                        <div className=' border-t-8 border-b-8 py-7'>
                            <p className='text-2xl  text-start font-bold pb-4'> Shopping Address</p>

                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={4} >
                                    <TextField name='firstName' label='FirstName' required fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4} >
                                    <TextField name='lastName' label='LastName' required fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        name='email' label='Email' fullWidth required
                                        {...register("email", {
                                            required: 'required',
                                            // minLength: 5,
                                            pattern: {
                                                // value: /^[A-Za-z]+$/i,
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "invalid email address"
                                            }
                                        })}
                                        error={errors?.email}
                                        helperText={errors.email ? errors.email.message : null}
                                        value={email}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        name='address' label='Address' fullWidth required
                                        {...register("address", {
                                            required: 'required',
                                            minLength: 5,
                                            message: 'invalid address'
                                        })}
                                        error={errors?.address}
                                        helperText={errors.address ? errors.address.message : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <TextField type='number'
                                        name='zip_code' label='zip code' fullWidth required
                                        {...register("zip_code", {
                                            required: 'required',
                                            minLength: 5,
                                            message: 'invalid address'
                                        })}
                                        error={errors?.zip_code}
                                        helperText={errors.zip_code ? errors.zip_code.message : null}
                                    />
                                </Grid>
                            </Grid>
                        </div>

                        {/* section 2 */}
                        <div className='my-8'>
                            <p className='text-2xl pb-3 font-bold'> Payment method </p>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={6}>
                                    <TextField type="number" name='card' label="card" placeholder='Credit Card' fullWidth required
                                        {...register("card", {
                                            required: 'required',
                                            minLength: 16,
                                            message: 'invalid card'
                                        })}
                                        error={errors?.card}
                                        helperText={errors.card ? errors.card.message : null}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <TextField type="number" name='cvc' label="cvc" placeholder='cvc' fullWidth required
                                        {...register("cvc", {
                                            required: 'required',
                                            maxLength: 5,
                                            minLength: 2,
                                            message: 'invalid cvc'
                                        })}
                                        error={errors?.cvc}
                                        helperText={errors.cvc ? errors.cvc.message : null} />
                                </Grid>
                            </Grid>
                        </div>

                        <div className='flex SM:flex-col SM:gap-2 sm:justify-between'>
                            <button className='btn btn-primary w-52 SM:w-full SM:order-3' onClick={() => { Navigate("/AppShop/shop") }} >
                                <KeyboardBackspaceIcon />  Back to Card
                            </button>
                            <button type='submit' className='btn text-white w-52 bg-blue-600 SM:w-full SM:order-2'>
                                PAY {total_payment(state.selectedItems)}
                            </button>
                        </div>
                    </div>

                    :

                    <div className='text-center'>
                        <div>
                            <p className='text-green-600 text-2xl pb-2 font-bold'> Successfully  </p>
                            <p className=' text-lg'> Thank You for your Shop </p>
                            <button className='mt-12 btn btn-primary w-2/5 ' onClick={() => Navigate("/AppShop/products")}>
                                <ArrowBackIcon /> <ArrowBackIcon />  Back to Product
                            </button>
                        </div>
                    </div>
                }

            </form>
        </div >
    );
}

export default Checkout;
