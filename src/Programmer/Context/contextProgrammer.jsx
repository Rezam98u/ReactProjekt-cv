import React, { createContext, useState } from 'react';

export const useStateContext = createContext()

const ContextProgrammer = ({ children }) => {

    return (
        <>
            <ContextProgrammer value={{}}>
                {children}
            </ContextProgrammer>
        </>
    );
}

export default ContextProgrammer;
