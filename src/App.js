import React from 'react';
import './index';
import './App.css';

import SlotM from './SlotM'

function App() {
  return (
    <>
      <h1 className='heading'>Welcome to the <span style={{ fontWeight: 'bold' }}>Slot Machine Game</span></h1>
      <div className='container'>
        <SlotM x={'😄'} y={'😄'} z={'😄'}/>
        <SlotM x={'😄'} y={'😄'} z={'😄'}/>
        <SlotM x={'😄'} y={'🍎'} z={'😄'}/>
        <SlotM x={'🍌'} y={'😄'} z={'😄'}/>
      </div>
    </>
  );
}

export default App;
