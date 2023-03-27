import { Alert, AppBar, Snackbar, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
/// context 
import { StateContext } from "./contextRecordFantasy"
import { useNavigate } from 'react-router-dom';
import Clear from '@mui/icons-material/Clear';
import { useReducer } from 'react';



////////////////////////
const UserFantasy = () => {
    const { profileOpen, setProfileOpen, email, setEmail,
        fantasy, setFantasy, putNewFantasy, setPutNewFantasy, open, setOpen } = useContext(StateContext)

    const navigate = useNavigate()

    const initialState = {
        savedFs: [],
        quantity_SavedFs: -1
    }
    const reducer = (state, action) => {

        switch (action.type) {
            case "add":
                state.savedFs.push(action.payload)
                state.quantity_SavedFs++
                return {
                    ...state, savedFs: [...state.savedFs],
                    quantity_SavedFs: state.quantity_SavedFs
                }

            // case "delet":
            // return { ...state, nam1: state.nam1 - action.mount }

            // case "reset":
            //     return initialState

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <AppBar>
                <div className='py-3 flex justify-center '>
                    <div className="w-4/5 flex items-center justify-between">
                        <div> <p className='text-md'>My Fantasy</p> </div>
                        <div className='relative'>
                            <Button onClick={() => setProfileOpen(!profileOpen)} variant="contained" className='gap-1'>
                                Profile <PersonIcon />
                            </Button>

                            {profileOpen &&
                                <div className='absolute top-10   bg-slate-400 rounded-md p-1'>
                                    <div>
                                        <p>userName: {email}</p>
                                        <p>saved Fantasy:  </p>
                                    </div>
                                    <div>
                                        <Button variant="contained"
                                            onClick={() => {
                                                setEmail("");
                                                // window.location.reload();
                                                navigate('/Record_fantasyMain/')
                                            }}>
                                            log out
                                        </Button>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </AppBar>

            <div className='mt-28 flex justify-center'>
                <div className='w-4/5'>
                    <p className='text-2xl  '>
                        write your first fantasy
                    </p>
                    <div className='py-3'>
                        <TextField
                            className='w-72'
                            id="outlined-textarea"
                            label=""
                            placeholder="write eny things and open-minded"
                            multiline
                            value={fantasy}
                            onChange={e => setFantasy(e.target.value)}

                        />

                    </div>
                    <div>

                        <Button variant='contained' onClick={() => {
                            dispatch({ type: "add", payload: fantasy })
                            // savedFs.push(fantasy);
                            setFantasy("")
                            console.log(state);
                        }}>
                            save
                        </Button>
                    </div>

                    <div className='mt-14'>
                        <p className='text-2xl'> My fantasy </p>
                        <div className="w-full border-4 rounded-xl p-8 mt-2">

                            {
                                <div className="flex justify-between items-center">
                                    {state.savedFs[state.quantity_SavedFs]}

                                    <div>
                                        <Button variant='contained' onClick={() => {
                                            dispatch({ type: "delete" })
                                        }} >
                                            delete
                                        </Button>
                                    </div>
                                </div>
                            }

                        </div>

                    </div>



                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            welcome {email}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </>
    );
}

export default UserFantasy;
