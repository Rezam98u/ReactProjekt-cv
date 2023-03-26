import { Alert, AppBar, Snackbar, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
/// context 
import { StateContext } from "./contextRecordFantasy"
import { useNavigate } from 'react-router-dom';
import Clear from '@mui/icons-material/Clear';

////////////////////////
const UserFantasy = () => {
    const { profileOpen, setProfileOpen, email, setEmail,
        fantasy, setFantasy, putNewFantasy, setPutNewFantasy, open, setOpen } = useContext(StateContext)


    const navigate = useNavigate()


    const savedFs = ["reza"]


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
                            savedFs.push(fantasy); setFantasy("")
                            console.log(savedFs);
                        }}>
                            save
                        </Button>
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            welcome {email}
                        </Alert>
                    </Snackbar>

                    <div className='mt-14'>
                        {/* <p className='text-2xl  '> fantasy of other people </p>

                        <div className='w-full border-4 rounded-xl p-8 mt-2'>
                            <p>
                                {putNewFantasy && localStorage.getItem('fantasy')}
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserFantasy;
