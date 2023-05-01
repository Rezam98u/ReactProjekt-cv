import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { StateContext } from "./contextRecordFantasy"

// import validate from "./validate"

///////////////////////////
const Login = () => {
    const Navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { email, pass, setOpen, setEmail, setPass, userId, setUserId , loginFromBack, setLoginFromBack } = useContext(StateContext)
    const [notFound, setNotFound] = useState(Boolean);


    const onSubmit = () => {
        loginFromBack.map(i => i.email === email ? setUserId(i.userId) : null)
        loginFromBack.map(i => email === i.email && pass === i.pass ?
            Navigate('/Record_fantasyMain/userFantasy')
            : setNotFound(true))
            setOpen(true);
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
                            <p className='text-2xl  text-start font-bold pb-4'> login </p>

                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        name='email' label='Email' fullWidth required
                                        onChange={e => setEmail(e.target.value)}

                                    // {...register("email", {
                                    //     required: 'required',
                                    //     // minLength: 5,
                                    //     // pattern: {
                                    //     //     // value: /^[A-Za-z]+$/i,
                                    //     //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    //     //     message: "invalid email address"
                                    //     // }

                                    // })}
                                    // error={errors?.email}
                                    // helperText={errors.email ? errors.email.message : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} >
                                    <TextField name='password' type='password' label='password' required fullWidth
                                        onChange={e => setPass(e.target.value)}

                                    />
                                </Grid>
                            </Grid>
                        </div>

                        <div className='flex SM:flex-col SM:gap-2 sm:justify-between  py-3'>
                            <button type='submit' className='btn text-white w-52 bg-blue-600 SM:w-full SM:order-2'>
                                login
                            </button>
                        </div>

                        {notFound &&
                            <div className="flex justify-center bg-red-400 p-2 px-3 rounded-lg">
                                user not found !
                            </div>
                        }
                    </div>

                </form>
            </div>

            <ToastContainer />
        </>
    );
}

export default Login;

