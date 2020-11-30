import React from 'react';

const Searchresult=(props)=>{

    const imgurl=`https://picsum.photos/600/300?${props.imgval}`;

    return(
        <>
        <div>
            <img src={imgurl} alt="images" />
        </div>
        </>
    );
}
export default Searchresult;