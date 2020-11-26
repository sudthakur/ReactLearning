import React, { createContext } from 'react';
import CompA from './CompA';

const mail=createContext();
const phone=createContext();

const Maincomp=()=>{
    return(
        <>
        <mail.Provider value={"thakursudarshan92@gmail.com"}>
            <phone.Provider value={"9650608750"}>
                <CompA></CompA>
            </phone.Provider>
        </mail.Provider>
            
        </>
    )
}

export default Maincomp;
export {mail, phone};