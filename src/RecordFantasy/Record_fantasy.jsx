import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import GoogleLogin from 'react-google-login';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import jwt from "jwt-decode"

import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import Video1 from '../video/spare your time and.mp4'

import { StateContext } from "./contextRecordFantasy"
import axios from 'axios';

/////////////////////////////////////
const RecordFantasy = () => {
    const navigate = useNavigate()
    const { fantasy, setFantasy, setPutNewFantasy, setEmail, email,
        like, setLike, profilePhoto, setProfilePhoto } = useContext(StateContext)
    const [getPublishedFantasyFromBack, setGetPublishedFantasyFromBack] = useState(Array)

    // const [user, setUser] = useState([]);
    // const [profile, setProfile] = useState([]);
    const [userObj, setUserObj] = useState({});

    const responseMessage = async response => {
        await setUserObj(jwt(response.credential));
    }
    const errorMessage = error => console.log(error)


    // const login_google = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });


    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get('http://localhost:3003/public')
            // console.log(data);
            setGetPublishedFantasyFromBack(data)
            // .then(response => response.json())
            // .then(data => setGetFantasyFromBack(data))
            // .catch(error => console.log(error));
        }
        fetch()

        // if (user) {
        //     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`
        //         , {
        //             headers: {
        //                 Authorization: `Bearer ${user.access_token}`,
        //                 Accept: 'application/json'
        //             }
        //         })
        //         .then((res) => {
        //             setProfile(res.data);
        //         })
        //         .catch((err) => console.log(err));
        // }

        setEmail(userObj.email); setProfilePhoto(userObj.picture)

    }, [1]);


    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // };

    // console.log(user);
    // console.log(profile);



    // console.log(userObj);
    // console.log(userObj.email);
    // console.log(userObj.picture);
    setEmail(userObj.email);
    setProfilePhoto(userObj.picture)
    // console.log(email);

    email && profilePhoto !== undefined && navigate('/Record_fantasyMain/userFantasy')



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
                        <div className='flex gap-2 items-center'>
                            {/* <div>
                                <Button variant="contained" >
                                    Cell your time and make money 
                                </Button>
                            </div> */}
                            <div>
                                <Button variant="contained" >
                                    Type of men and women
                                </Button>
                            </div>
                            <div>
                                <Button> <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /></Button>
                                <div>
                                    {/* <Button variant='contained' onClick={logOut}> LogOut </Button> */}
                                </div>

                            </div>
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
                                {getPublishedFantasyFromBack.length === 0 ? <div> there is no fantasy </div> :

                                    getPublishedFantasyFromBack.map(item =>
                                        <div key={item.id} className="flex justify-between items-center mt-3 border-t-2">
                                            {item.publishedFantasy}
                                            <div className="flex gap-2 items-center mt-2">
                                                <button> <MapsUgcOutlinedIcon /> </button>
                                                <button onClick={() => setLike(!like)}> {like ? <FavoriteIcon /> : <FavoriteBorderIcon />} </button>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex justify-center my-5'>
                        <video src={Video1} autoPlay loop muted className='rounded-3xl ' ></video>
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default RecordFantasy;
