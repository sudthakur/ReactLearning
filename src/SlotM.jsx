import React from 'react';


const SlotM = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
  
    if (props.x === props.y && props.y === props.z) {
      return (
        <>
          <div class='div-cont'>
            <h2>{x}{y}{z}</h2>
            <h4>This is Matching</h4>
            <hr/>
          </div>
        </>
      )
    }else{
      return (
        <>
          <div class='div-cont'>
            <h2>{x}{y}{z}</h2>
            <h4>This is Not Matching</h4>
            <hr/>
          </div>
        </>
      )
    }
  }

  export default SlotM;