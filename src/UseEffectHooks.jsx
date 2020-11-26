import React, { useEffect, useState } from 'react';

const UseEffectHooks=()=>{
    const [num,setnum] = useState(0);
    const [nums,setnums] = useState(0);

    useEffect(() => {
        alert("Clicked by me");
    },[nums]);

    // const Incre=()=>{
    //     setnum(num+1);
    // }

    return(
        <>
            <button  onClick={()=>{setnum(num+1)}}>Click ME {num}</button>
            <br></br>
            <button  onClick={()=>{setnums(nums+1)}}>Click ME {nums}</button>
        </>
    );
}

export default UseEffectHooks;