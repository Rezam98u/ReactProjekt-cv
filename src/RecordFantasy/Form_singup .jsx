import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';

//// context 
import { StateContext } from "./contextRecordFantasy"

// import validate from "./validate"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const initialState = {
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//     isAccepted: true
// }

const Form = () => {
    const { email, setEmail , setOpen } = useContext(StateContext)

    // const [pass, setPass] = useState('');
    // console.log(`pass`, pass);

    const { handleSubmit, register, getValues, formState: { errors } } = useForm();

    const Navigate = useNavigate();

    const onSubmit = () => {
        Navigate('/Record_fantasyMain');
        localStorage.setItem('email', email);
        Navigate('/Record_fantasyMain/userFantasy'); setOpen(true);
    }

    // // const notify = () => toast("Wow so easy!");
    // const notify_success = () => toast.success("success");
    // const notify_error = () => toast.error("error");


    return (
        <>
            <div className=' px-8 pt-14'>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='shadow-2xl border-2 rounded-lg py-4 my-5'>

                    <div className='mx-auto w-4/5 '>
                        <div className=' border-t-8 border-b-8 py-7'>
                            <p className='text-2xl  text-start font-bold pb-4'> sing up </p>

                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={4} >
                                    <TextField name='password' type='password' label='password' required fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        name='email' label='Email' type='email'
                                        // onChange={e => setEmail(e.target.value)} 
                                        fullWidth required

                                    // {...register("email", {
                                    //     required: 'required',
                                    //     // minLength: 5,
                                    //     pattern: {
                                    //         // value: /^[A-Za-z]+$/i,
                                    //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    //         message: "invalid email address"
                                    //     }
                                    // })}
                                    // error={errors?.email}
                                    // helperText={errors.email ? errors.email.message : null}

                                    />
                                </Grid>

                            </Grid>
                        </div>

                        <div className='flex SM:flex-col SM:gap-2 sm:justify-between  py-3'>
                            <button type='submit' className='btn text-white w-52 bg-blue-600 SM:w-full SM:order-2'>
                                save
                            </button>
                        </div>
                    </div>

                </form>
            </div >

            <ToastContainer />

        </>
    );
}

export default Form;
