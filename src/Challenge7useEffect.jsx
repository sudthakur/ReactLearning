import React, { useEffect, useState } from 'react';

const Challenge7useEffect=()=>{

    const [num,setnum]=useState(0);

    useEffect(()=>{
        document.title=`You Clicked ${num} Times`
    });

    return(
        <>
        <button style={{height:'50px',width:'100px'}} onClick={()=>{setnum(num+1);}}>Click Me {num}</button>
        </>
    );
}

export default Challenge7useEffect;