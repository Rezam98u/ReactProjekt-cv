import React, { useContext, useState, useEffect } from 'react';
import { Alert, AppBar, Button, Snackbar, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Clear from '@mui/icons-material/Clear';
import { useReducer } from 'react';
import axios from 'axios';
import { array, string } from 'prop-types';

/// context 
import { StateContext } from "./contextRecordFantasy"

////////////////////////
const UserFantasy = () => {
    const navigate = useNavigate()
    const { profileOpen, setProfileOpen, email, setEmail,
        fantasy, setFantasy, open, setOpen, userId, setUserId, loading, setLoading } = useContext(StateContext)

    // const [noFs, setNoFs] = useState(true);
    const [getFantasyFromBack, setGetFantasyFromBack] = useState(Array);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        const fetch = async () => {
            setLoading(false)

            const res = await axios.get('http://localhost:3003/fantasy')
            setGetFantasyFromBack(res.data.filter(i => i.userId === userId))
            // .then(response => response.json())
            // .then(data => setGetFantasyFromBack(data))
            // .catch(error => console.log(error));
        }
        fetch()
        setLoading(true)
    }, [1]);

    // console.log(getFantasyFromBack);
    // console.log(email);
    return (
        <>
            <AppBar>
                <div className='py-3 flex justify-center '>
                    <div className="w-4/5 flex items-center justify-between">
                        <div> <p className='text-md'> My Fantasy </p> </div>

                        <div>
                            <Button variant="contained" className='gap-1'>
                                show your character by emoji <PersonIcon />
                            </Button>
                        </div>

                        <div className="relative">
                            <Button onClick={() => setProfileOpen(!profileOpen)} variant="contained" className='gap-1'>
                                Profile  <Avatar className='ml-2' alt='#' sx={{ width: 30, height: 30 }} />
                            </Button>

                            {profileOpen &&
                                <div className='absolute top-10 bg-slate-500 rounded-md px-3 py-2'>
                                    <div>
                                        <p> userName: {email} </p>
                                        {/* <p>saved Fantasy:  </p> */}
                                    </div>
                                    <div className="my-3">
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
                            axios.post('http://localhost:3003/fantasy', { fantasy: fantasy, id: userId }).then((res) => console.log(res))
                            setFantasy("")
                        }}>
                            save
                        </Button>
                    </div>

                    <div className='mt-14'>
                        <p className='text-2xl'> My fantasy </p>
                        <div className="w-full border-2 rounded-xl p-8 mt-2">

                            {!loading ? <div className="flex justify-center"> <CircularProgress /> </div> :
                                getFantasyFromBack.length === 0 ? <div> you have no fantasy </div> :
                                    getFantasyFromBack.map(item =>
                                        <div key={item.id} className="flex justify-between items-center mt-3 border-t-2">
                                            {item.fantasy}
                                            <div className="gap-2 flex mt-3">
                                                <button className="bg-green-500 rounded-lg p-2" onClick={() =>
                                                    axios.post('http://localhost:3003/public', { id: item.userId, fantasy: item.fantasy }).then((res) => console.log(res))
                                                } >
                                                    Public to show
                                                </button>
                                                <button className="bg-red-600 rounded-lg p-2" onClick={() => {
                                                    axios.post('http://localhost:3003/delete', { id: item.id }).then((res) => console.log(res))
                                                    // window.location.reload();                                            // console.log(item.id)
                                                    // dispatch({ type: "delete", payload: item.id })
                                                }} >
                                                    delete
                                                </button>
                                            </div>
                                        </div>)
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
