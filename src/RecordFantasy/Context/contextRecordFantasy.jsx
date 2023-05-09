import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

export const StateContext = createContext();

////////////////////////////////////
const ContextRecordFantasy = ({ children }) => {
    const initialState = {
        savedFs: [],
        quantity_SavedFs: -1,
        publishedFs: [],
        quantity_published: -1,
    }
    const reducer = (state, action) => {
        console.log(state.savedFs);
        switch (action.type) {
            case "add":
                state.savedFs.push({ fantasy: action.payload, id: state.quantity_SavedFs++ })
                state.quantity_SavedFs++
                return {
                    ...state,
                    savedFs: [...state.savedFs],
                    quantity_SavedFs: state.quantity_SavedFs
                }
            case "delete":
                const newSavedFs = state.savedFs.filter(i => i.id !== action.payload)
                state.quantity_SavedFs--;
                console.log(newSavedFs);
                return {
                    ...state,
                    savedFs: [...newSavedFs],
                    quantity_SavedFs: state.quantity_SavedFs
                }
            case "publish":
                state.publishedFs.push({ publishedFs: action.payload, id: state.quantity_published++ })
                state.quantity_published++
                return { ...state, publishedFs: state.publishedFs }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [loading, setLoading] = useState(Boolean);
    const [profileOpen, setProfileOpen] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(undefined)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fantasy, setFantasy] = useState('');
    const [userId, setUserId] = useState('');
    const [putNewFantasy, setPutNewFantasy] = useState(false);
    const [like, setLike] = useState(false);
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);


    /// Backend
    const [loginFromBack, setLoginFromBack] = useState([])


    useEffect(() => {
        setPutNewFantasy(false)

        const fetch = async () => {
            const { data } = await axios.get('http://localhost:3003/login')
            setLoginFromBack(data)
            // setUserId(data.map(i => i.userId))
            // res.data.find(i => i.email === email ? setUserId(i.userId) : null)


            // .then(response => response.json())
            // .then(data => setGetFantasyFromBack(data))
            // .catch(error => console.log(error));
        }
        fetch()
    }, [1]);

    // console.log(userId)
    // console.log(`pass`, pass);
    // console.log(`email`, email);

    return (
        <StateContext.Provider value={{
            profileOpen, setProfileOpen, pass, setPass, profilePhoto, setProfilePhoto,
            email, setEmail, fantasy, setFantasy, userId, setUserId,
            putNewFantasy, setPutNewFantasy, open, setOpen, loginFromBack, setLoginFromBack,
            state, dispatch, like, setLike, loading, setLoading, openMenu, setOpenMenu
        }}>
            {children}
        </StateContext.Provider >
    );
}

export default ContextRecordFantasy;
