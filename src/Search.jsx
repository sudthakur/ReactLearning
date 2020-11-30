import React, { useState } from 'react';
import './index.css'
import Searchresult from './Searchresult';
const Search=()=>{
    const[val,setval] = useState('');

    const valfunc=(event)=>{
        console.log(event.target.value);
        setval(event.target.value);
    }

    return(
        <>
            <div style={{marginLeft:'500px',marginTop:'50px'}}>
                <input type="text" onChange={valfunc} value={val} placeholder="Search Anything" style={{width:'200px',height:'30px',borderRadius:'5px'}}/>
                {val===''?"":<Searchresult imgval={val}></Searchresult>}
            </div>
            
        </>
    );
}

export default Search;