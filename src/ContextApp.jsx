import { React, useState, createContext } from 'react';

export const AppContext = createContext();

////////////////////////
const ContextApp = ({ children }) => {

    const [mood, setMood] = useState(false);
    const MoodHandler = () => setMood(!mood);
    const [scroll, setScroll] = useState(Number);


    return (
        <div className={mood ? "dark" : ""}>
            <AppContext.Provider value={{ mood, setMood, MoodHandler, scroll, setScroll }}>
                {children}
            </AppContext.Provider>
        </div>
    );
}

export default ContextApp;
