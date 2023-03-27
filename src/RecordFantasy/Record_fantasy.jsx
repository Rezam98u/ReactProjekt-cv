import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

import { StateContext } from "./contextRecordFantasy"

/////////////////////////////////////
const RecordFantasy = () => {
    const navigate = useNavigate()
    const { fantasy, setFantasy, setPutNewFantasy, state, like, setLike } = useContext(StateContext)

    // [...localStorage].map(i => console.log(i))

    // const map = new Map(JSON.parse(localStorage.myMap));
    // localStorage.myMap = JSON.stringify(Array.from(map.entries()));
    // console.log(localStorage);

    return (
        <>
            <AppBar>
                <div className='flex justify-center'>
                    <div className='flex justify-between w-4/5 py-4 '>
                        <Button variant="contained" onClick={() => navigate('/')}>
                            <HomeIcon />
                        </Button>
                        <div className='flex gap-2'>
                            <div>
                                <Button onClick={() => navigate('/Record_fantasyMain/singUp')} variant="contained" >
                                    sing up
                                </Button>
                            </div>
                            <div>
                                <Button onClick={() => navigate('/Record_fantasyMain/login')} variant="contained" >
                                    login
                                </Button>
                            </div>
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
                            onChange={e => setFantasy(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button onClick={() => { setPutNewFantasy(true); localStorage.setItem('fantasy', fantasy) }} variant='contained' >
                            save (as unknown person)
                        </Button>
                    </div>

                    <div className='mt-14'>
                        <p className='text-2xl'> fantasy of other people </p>
                        <div className='w-full border-4 rounded-xl p-8 mt-2'>
                            <div>
                                {state.publishedFs.map(item =>
                                    <div key={item.id} className="flex justify-between items-center mt-1 border-t-2">
                                        <div> {item.publishedFs} </div>
                                        <div className="flex gap-2 items-center mt-2">
                                            <button onClick={console.log()}> <MapsUgcOutlinedIcon /> </button>
                                            <button onClick={() => setLike(!like)}> {like ? <FavoriteIcon /> : <FavoriteBorderIcon />} </button>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecordFantasy;
