import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemonapi=()=>{
    const [num,setnum]=useState(1);

    const [name,setname]=useState();
    const [moves,setmoves]=useState();
    const [movesname,setmovesname]=useState();
    const [height,setheight]=useState();

    useEffect(()=>{
        async function getdata(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmoves(res.data.moves.length);
            setmovesname(res.data.moves[0].move.name);
            setheight(res.data.height);
            console.log(res);
        }
        getdata();
    });

    return(
        <>
        <h1>Yo have selected <span style={{color:'red'}}>{num}</span></h1>
        <h1>Selected character name <span style={{color:'red'}}>{name}</span></h1>
        <h1>Selected character moves <span style={{color:'red'}}>{moves}</span></h1>
        <h1>Selected character movesname <span style={{color:'red'}}>{movesname}</span></h1>
        <h1>Selected character height <span style={{color:'red'}}>{height}</span></h1>
            <select style={{width:'100px',height:'50px',textAlign:'center'}} value={num} onChange={(event)=>{setnum(event.target.value)}}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
}

export default Pokemonapi;