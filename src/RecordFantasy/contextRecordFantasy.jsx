import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const StateContext = createContext();
//////////////
const ContextRecordFantasy = ({ children }) => {
    const [profileOpen, setProfileOpen] = useState(false)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fantasy, setFantasy] = useState('');
    const [putNewFantasy, setPutNewFantasy] = useState(false);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setPutNewFantasy(false)
    }, [fantasy]);

    // console.log(`pass`, pass);
    // console.log(`email`, email);

    return (
        <StateContext.Provider value={{
            profileOpen, setProfileOpen,
            pass, setPass, email, setEmail, fantasy, setFantasy,
            putNewFantasy, setPutNewFantasy , open, setOpen
        }}>
            {children}
        </StateContext.Provider>
    );
}

export default ContextRecordFantasy;
