import React from 'react';
import {mail, phone} from './Maincomp';
import { useContext } from 'react';


const CompB=()=>{
    const mailid = useContext(mail);
    const phoneno = useContext(phone);
    return(
        <>
            <h1>My mailid :{mailid} && my phone number :{phoneno}</h1>
        </>
    )
}

export default CompB;