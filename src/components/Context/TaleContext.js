import React, {createContext, useState, useContext} from 'react';

const TaleContext = createContext();

export const useTale = () => useContext(TaleContext);

export const TaleProvider = ({children}) => {
    const [tale, setTale] = useState({ title: "", text: "", imageUrl: "" });

    return (
        <TaleContext.Provider value = {{tale, setTale}}>
            {children}
        </TaleContext.Provider>
    )
};