import { Alert, AppBar, Snackbar, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
/// context 
import { StateContext } from "./contextRecordFantasy"
import { useNavigate } from 'react-router-dom';
import Clear from '@mui/icons-material/Clear';
import { useReducer } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



////////////////////////
const UserFantasy = () => {
    const { profileOpen, setProfileOpen, email, setEmail,
        fantasy, setFantasy, putNewFantasy, setPutNewFantasy, open, setOpen, state, dispatch } = useContext(StateContext)

    const navigate = useNavigate()
    const [noFs, setNoFs] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    useEffect(() => {
        fetch('http://localhost:3003/fantasy')
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (
        <>
            <AppBar>
                <div className='py-3 flex justify-center '>
                    <div className="w-4/5 flex items-center justify-between">
                        <div> <p className='text-md'>My Fantasy</p> </div>
                        <div className='relative'>

                            <Button variant="contained" className='gap-1'>
                                show your character by emoji <PersonIcon />
                            </Button>

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
                        <Button className="bg-blue-700" onClick={() => {
                            axios.post('http://localhost:3003/fantasy', { fantasy: fantasy }).then((res) => console.log(res))

                            dispatch({ type: "add", payload: fantasy })
                            // savedFs.push(fantasy);
                            setFantasy("")
                            setNoFs(false)
                        }}>
                            save
                        </Button>
                    </div>

                    <div className='mt-14'>
                        <p className='text-2xl'> My fantasy </p>
                        <div className="w-full border-2 rounded-xl p-8 mt-2">
                            {noFs ? <div> you have no Fantasy </div>
                                :
                                state.savedFs.map(item =>
                                    <div key={item.id} className="flex justify-between items-center mt-3 border-t-2">
                                        {item.fantasy}
                                        <div className="gap-2 flex mt-3">
                                            <button className="bg-green-500 rounded-lg p-2"
                                                onClick={() => {
                                                    dispatch({ type: "publish", payload: item.fantasy });
                                                    localStorage.setItem(item.id, item.fantasy)
                                                }}>
                                                Public to show
                                            </button>
                                            <button className="bg-red-600 rounded-lg p-2" onClick={() => {
                                                dispatch({ type: "delete", payload: item.id })
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
